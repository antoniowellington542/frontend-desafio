import { IParcel } from "./IParcel";

export interface ISimulation{
    cpf: string;
    birthday: string;
    value: number;
    uf: string;
    tax: number;
    parcelValue: number;
    qntParcels: number;
    totalTax: number;
    totalPayValue: number;
    parcels: IParcel[];
}