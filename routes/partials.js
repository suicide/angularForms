/* GET home page. */
exports.partial = function(req, res){
  res.render(req.params.name);
};
