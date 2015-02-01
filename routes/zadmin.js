
/*
 * GET home page of zadmin.
 */

exports.index = function(req, res){
  res.render('zadmin', { title: 'Admin Panel', sampletext:'Welcome to the admin page...!' });
};