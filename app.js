const axios = require('axios');
const mysql = require('mysql2');

// Connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'league_db'
});

// URL de l'API pour obtenir la liste des champions
const API_URL_CHAMPIONS = 'https://ddragon.leagueoflegends.com/cdn/15.2.1/data/fr_FR/champion.json';

// Fonction pour récupérer les données de chaque champion
async function fetchChampionData(championId) {
  const url = `https://ddragon.leagueoflegends.com/cdn/15.2.1/data/fr_FR/champion/${championId}.json`;
  const response = await axios.get(url);
  return response.data.data[championId];
}

// Fonction pour vérifier si le skin existe déjà dans la base de données
async function skinExists(skinId) {
  const [rows] = await connection.promise().query(`
    SELECT 1 FROM Skins WHERE skin_id = ?
  `, [skinId]);
  return rows.length > 0;  // Si une ligne existe, cela signifie que le skin existe déjà
}

// Fonction pour vérifier si un tag existe déjà dans la base de données
async function tagExists(tagName) {
  const [rows] = await connection.promise().query(`
    SELECT 1 FROM Tags WHERE nom = ?
  `, [tagName]);
  return rows.length > 0;  // Si une ligne existe, cela signifie que le tag existe déjà
}

// Fonction pour insérer un tag
async function insertTag(tagName) {
  await connection.promise().query(`
    INSERT INTO Tags (nom) VALUES (?)
  `, [tagName]);
}

// Fonction pour insérer un tag associé à un sort
async function insertTagSort(sortId, tagId) {
  await connection.promise().query(`
    INSERT INTO Tags_Sorts (sort_id, tag_id) VALUES (?, ?)
  `, [sortId, tagId]);
}

// Fonction pour insérer une astuce
async function insertTip(championId, type, tip) {
  await connection.promise().query(`
    INSERT INTO Astuces (champion_id, type, astuce)
    VALUES (?, ?, ?)
  `, [championId, type, tip]);
}

// Fonction pour insérer une relation entre champions
async function insertRelation(champion1Id, champion2Id, relationType) {
  await connection.promise().query(`
    INSERT INTO Relations_Champions (champion1_id, champion2_id, type_relation)
    VALUES (?, ?, ?)
  `, [champion1Id, champion2Id, relationType]);
}

// Fonction pour fetcher et insérer les données
async function fetchAndInsertData() {
  try {
    const championResponse = await axios.get(API_URL_CHAMPIONS);
    const championsData = championResponse.data.data;

    for (const championKey in championsData) {
      const champion = championsData[championKey];
      console.log(`🔄 Récupération des données pour le champion ${champion.id}...`);

      const detailedChampionData = await fetchChampionData(champion.id);
      if (!detailedChampionData) {
        console.error(`⚠️ Impossible de récupérer les données détaillées pour ${champion.id}`);
        continue;
      }

      const championSplashImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

      const [championResult] = await connection.promise().query(`
        INSERT INTO Champions (cle, nom, titre, histoire, description, roles, type_ressource)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [
        champion.key,
        champion.id,
        champion.title,
        detailedChampionData.lore || "",
        champion.blurb,
        champion.tags.join(', '),
        detailedChampionData.partype || ""
      ]);

      const championId = championResult.insertId;

      // Insertion des passifs
      if (detailedChampionData.passive) {
        await connection.promise().query(`
          INSERT INTO Passifs (champion_id, nom, description, image)
          VALUES (?, ?, ?, ?)
        `, [
          championId,
          detailedChampionData.passive.name,
          detailedChampionData.passive.description,
          detailedChampionData.passive.image ? `https://ddragon.leagueoflegends.com/cdn/15.2.1/img/passive/${detailedChampionData.passive.image.full}` : ""
        ]);
      }

      // Vérification et insertion du skin par défaut
      const defaultSkin = detailedChampionData.skins.find(skin => skin.num === 0);
      const defaultSkinId = defaultSkin ? defaultSkin.id : `${championId}000`; // Utiliser l'ID du skin par défaut s'il existe

      // Vérifier si le skin par défaut existe déjà
      const skinExistsFlag = await skinExists(defaultSkinId);
      if (!skinExistsFlag) {
        // Si le skin n'existe pas, on l'insère
        await connection.promise().query(`
          INSERT INTO Skins (champion_id, skin_id, nom, chromas, image)
          VALUES (?, ?, ?, ?, ?)
        `, [
          championId,
          defaultSkinId,
          "default",
          false,
          championSplashImage
        ]);
        console.log(`✅ Skin par défaut inséré pour le champion ${champion.id}`);
      } else {
        console.log(`⚠️ Skin par défaut déjà existant pour le champion ${champion.id}`);
      }

      // Insertion des autres skins
      if (Array.isArray(detailedChampionData.skins)) {
        for (const skin of detailedChampionData.skins) {
          const skinImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`;
          
          // Vérification si ce skin existe déjà
          const skinExistsFlag = await skinExists(skin.id);
          if (!skinExistsFlag) {
            await connection.promise().query(`
              INSERT INTO Skins (champion_id, skin_id, nom, chromas, image)
              VALUES (?, ?, ?, ?, ?)
            `, [
              championId,
              skin.id,
              skin.name,
              skin.chromas || false,
              skinImage
            ]);
          }
        }
      }

      // Insertion des statistiques
      const stats = detailedChampionData.stats;

      await connection.promise().query(`
        INSERT INTO Statistiques (champion_id, pv, pv_par_niveau, mana, mana_par_niveau, vitesse_deplacement, armure, armure_par_niveau, resistance_magique, resistance_magique_par_niveau, portee_attaque, regen_pv, regen_pv_par_niveau, degats_attaque, degats_attaque_par_niveau, vitesse_attaque, vitesse_attaque_par_niveau)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        championId,
        stats.hp || 0,
        stats.hpperlevel || 0,
        stats.mp || 0,
        stats.mpperlevel || 0,
        stats.movespeed || 0,
        stats.armor || 0,
        stats.armorperlevel || 0,
        stats.spellblock || 0,
        stats.spellblockperlevel || 0,
        stats.attackrange || 0,
        stats.hpregen || 0,
        stats.hpregenperlevel || 0,
        stats.attackdamage || 0,
        stats.attackdamageperlevel || 0,
        stats.attackspeed || 0,
        stats.attackspeedperlevel || 0
      ]);

      // Insertion des sorts
      for (const spell of Object.values(detailedChampionData.spells)) {
        const spellId = spell.id;

        const spellImage = `https://ddragon.leagueoflegends.com/cdn/15.2.1/img/spell/${spell.id}.png`;
        await connection.promise().query(`
          INSERT INTO Sorts (champion_id, touche, nom, description, tooltip, type_cout, ressource, image)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          championId,
          spellId,
          spell.name,
          spell.description,
          spell.tooltip,
          spell.costType,
          spell.resource || "",
          spellImage
        ]);
        
        const [sortResult] = await connection.promise().query(`
          SELECT id FROM Sorts WHERE champion_id = ? AND touche = ?
        `, [championId, spellId]);

        if (sortResult.length > 0) {
          const sortId = sortResult[0].id;
          await connection.promise().query(`
            INSERT INTO Sorts_Stats (sort_id, niveau, temps_rechargement, cout, portee)
            VALUES (?, ?, ?, ?, ?)
          `, [
            sortId,
            1,
            spell.cooldown ? spell.cooldown[0] : null,
            spell.cost ? spell.cost[0] : null,
            spell.range ? spell.range[0] : null
          ]);

          // Insertion des tags pour les sorts
          if (Array.isArray(spell.tags)) {
            for (const tagName of spell.tags) {
              const tagExistsFlag = await tagExists(tagName);
              if (!tagExistsFlag) {
                await insertTag(tagName);
              }

              const [tagResult] = await connection.promise().query(`
                SELECT id FROM Tags WHERE nom = ?
              `, [tagName]);

              if (tagResult.length > 0) {
                const tagId = tagResult[0].id;
                await insertTagSort(sortId, tagId);
              }
            }
          }
        }
      }

      // Insertion des astuces
      if (Array.isArray(detailedChampionData.tips)) {
        for (const tip of detailedChampionData.tips) {
          await insertTip(championId, 'general', tip);
        }
      }

      // Insertion des relations avec d'autres champions
      if (Array.isArray(detailedChampionData.relations)) {
        for (const relatedChampion of detailedChampionData.relations) {
          await insertRelation(championId, relatedChampion.id, relatedChampion.type);
        }
      }
    }

    console.log("✅ Données insérées avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de l'insertion des données:", error);
  } finally {
    connection.end();
  }
}

// Exécuter la fonction
fetchAndInsertData();
