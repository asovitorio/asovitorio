const projetos = require('../models/bdPraticasComplementar');

const homeController = {
    home:(req,res) =>{

        let listasProjetos = projetos.projetos();
        res.render('index',{projetos: listasProjetos,titulo:"Portifolio"});
    }
}
module.exports = homeController;