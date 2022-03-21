const axios = require('axios');
const { json } = require('express/lib/response');
const querystring = require('querystring');



class GitHubController{



    static async pegaTodosRepositorios(req,res){

       
    await axios
        .get(`https://api.github.com/repositories?page=1&per_page=16`)
        .then((result)=>{
            let repositories = [];
            
            result.data.forEach(element => {
                let linguagens= []
                axios
                    .get(element.languages_url)
                    .then((result)=>{
                        console.log(result.data);
                        linguagens.push(result.data)
                    })

                let repositorio = {
                    id: element.id,
                    dono: element.owner.login,
                    nome:  element.name,
                    linguagens: linguagens
                }
                repositories.push(repositorio)
            });
            
            return res.status(200).json(repositories)
        })
        .catch((error)=>{
            return res.status(500).json(error.message)
        })
    }


    static async listaLinguagensRepositorio(req,res){
        const infoRepositorio = req.body

        await axios
        .get(`https://api.github.com/repos/${infoRepositorio.dono}/${infoRepositorio.nome}/languages`)
        .then((result)=>{       
            console.log(result);     
            return res.status(200).result.data
        })
        .catch((error)=>{
            return res.status(500).json(error.message)
        })
    }





    static async filtraLinguagem(req,res){
        const { linguagem } = req.body
        console.log(linguagem);
        // to do paginação
        await axios.all([
            axios.get(`https://api.github.com/search/repositories?page=1&per_page=16`, { params: { q: `language:${linguagem}` } })
            .then((result)=>{
                let repositories = [];
                
                result.data.items.forEach(element => {
                    let linguagens= []
                        // axios
                        //     .get(element.languages_url)
                        //     .then((result)=>{
                        //         console.log(result);
                        //         linguagens.push(result.data)
                        //     })
                
                    let repositorio = {
                        id: element.id,
                        dono: element.owner.login,
                        nome:  element.name,
                        linguagens: linguagens
                    }

                    repositories.push(repositorio)
                });
                
                return res.status(200).json(repositories)
            })
            .catch((error)=>{
                return res.status(500).json(error.message)
            })
        ])
            
    }





}
module.exports = GitHubController