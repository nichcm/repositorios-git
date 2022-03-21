const { Router } = require('express')
const GitHubController = require('../controllers/GitHubController')
const router = Router()


// router.get('/api/habilidades', HabilidadeController.pegaTodasAsHabilidades)

router.get('/repositorios', GitHubController.pegaTodosRepositorios)
router.get('/pesquisa', GitHubController.filtraLinguagem)
router.get('/lista', GitHubController.listaLinguagensRepositorio)


module.exports =  router