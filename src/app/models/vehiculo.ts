import { Usuario } from "./usuario";

export interface Vehiculo {
    id: number,
    marca: string,
    modelo: string,
    anno: number,
    patente: string,
    img: string,
    conductor?: Usuario
}