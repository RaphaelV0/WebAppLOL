/**
 * PassifController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async find(req, res) {
      try {
        const passifs = await Passif.find();
        return res.json(passifs);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    async findOne(req, res) {
      try {
        const passif = await Passif.findOne({ id: req.params.id });
        if (!passif) return res.notFound();
        return res.json(passif);
      } catch (err) {
        return res.serverError(err);
      }
    }
  };
  

