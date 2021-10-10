import { Especialidade } from "./especialidade";

export interface Medico {
    id:string
    crm:number
    nome:string
    email:string
    telefone:string
    especialidade: Especialidade
}
