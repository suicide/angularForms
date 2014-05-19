/* GET users listing. */
exports.formAction = function(req, res){

  var formData = {
    title: req.body.title,
    message: req.body.message
  };

  console.log('Received formData ' + formData.title)

  res.json(true);

};
