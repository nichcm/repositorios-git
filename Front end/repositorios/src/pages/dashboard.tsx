import axios from "axios";
import { useState } from "react";
import { useQuery } from 'react-query'

type repositorios ={
    id: number,
    dono: string,
    nome: string,
    repos_url: string,
  
}

export default function Dashboard(){
    const [select, setSelect] = useState('');
    
    const { data, isFetching } =  useQuery<repositorios[]>('repos', async () =>{
        const response = await axios.get('http://localhost:3333/repositorios')      
        
        return response.data
    })
    

    
    return (
        <div>
            <form>
                <select
                    value={select}
                    onChange={ ({ target }) => setSelect(target.value)}
                    id="linguagens"
                >
                    <option disabled value=""> Selecione a linguagem</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">python</option>
                </select>
            </form>

            <div>
                { isFetching && <p> Carregando...</p>}
                {data?.map(repo => {
                    return (
                        <div className="conteiner">
                            <li key={repo.id}>
                                <strong>{repo.dono}</strong>
                                <p>{repo.nome}</p>
                            <a href={repo.repos_url} > acessar repositorio</a>
                            </li>
                        </div>
                        
                    )
                })}
            </div>
        </div>
        
    )
}