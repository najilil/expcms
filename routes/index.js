
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', sampletext:'welcome to cms homepage :)' });
};