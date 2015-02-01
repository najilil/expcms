
/*
 * every page of single page with dynamic url.
 */

exports.publicpost = function(req, res){
	var pathurl = (req.path).replace('/','');
	res.render('single', { title: pathurl, url: req.originalUrl });
};