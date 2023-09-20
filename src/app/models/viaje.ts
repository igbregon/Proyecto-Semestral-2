import { Vehiculo } from "./vehiculo";

export interface Viaje {
    vehiculo?: Vehiculo,
    inicio: string,
    destino: string,
    asientos: number,
    precio: number
}
