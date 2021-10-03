import { Medico } from "./medico";

export interface Agenda {
    id: number
    medico: Medico
    dia: string
    horarios: string[]
}
