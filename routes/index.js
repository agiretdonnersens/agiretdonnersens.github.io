exports.index = function(req, res){
  res.render('index.ejs', {
    title: 'Marie Leurent - Agir et donner sens',
    description: 'Marie Leurent, coach en ressources humaines'
  });
};