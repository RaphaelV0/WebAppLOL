/**
 * ChampionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async find(req, res) {
      try {
        const champions = await Champion.find().populate('skins').populate('sorts');
        return res.json(champions);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    async findOne(req, res) {
      try {
        const champion = await Champion.findOne({ id: req.params.id }).populate('skins').populate('sorts');
        if (!champion) return res.notFound();
        return res.json(champion);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    async update(req, res) {
      try {
        const updatedChampion = await Champion.updateOne({ id: req.params.id }).set(req.body);
        if (!updatedChampion) return res.notFound();
        return res.json(updatedChampion);
      } catch (err) {
        return res.serverError(err);
      }
    }
  };
  