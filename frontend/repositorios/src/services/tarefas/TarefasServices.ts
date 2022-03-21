import { ApiException } from './../ApiException';
import { Api } from "../api";

interface Repositorios{
    id: number;
    nome: string;
    dono: string;
    linguagens: []
}

const getRepositorios = async (): Promise<Repositorios[] | ApiException> => {
    try {
        const { data } = await Api().get('/repositorios');

        return data;
    } catch (error: any) {
        return new ApiException ( error.massage || 'erro ao consultar API')
    }
}