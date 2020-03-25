const projetos = require('../models/bdPraticasComplementar');

const flexBoxController = {
    flexBox:(req,res) =>{

        let listasProjetos = projetos.projetos();
        res.render('flexBox',{titulo:"Flex Box"});
    }
}
module.exports = flexBoxController;