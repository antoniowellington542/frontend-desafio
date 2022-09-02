import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { ISimulation } from "../interfaces/ISimulation";

const DEFAULT_VALUE = {
    simulation: {
        cpf: '',
        birthday: '',
        value: 0,
        uf: '',
        tax: 0,
        parcelValue: 0,
        qntParcels: 0,
        totalTax: 0,
        totalPayValue: 0,
        parcels: [
            {
                payValue: 0,
                feesValue: 0,
                valueWithFees: 0,
                parcelValue: 0,
                payDate: '',
            }
        ]
    },
    setSimulation: ()=>{}
}

interface IContextProps{
    simulation: ISimulation;
    setSimulation: Dispatch<SetStateAction<ISimulation>>; 
}

interface Props{
    children: ReactNode;
}

const SimulationContext = createContext<IContextProps>(DEFAULT_VALUE);

const SimulationProvider: FC<Props> = ({ children })=>{
    const [simulation, setSimulation] = useState(DEFAULT_VALUE.simulation);
    return(
        <SimulationContext.Provider value={{simulation, setSimulation}}>
            {children}
        </SimulationContext.Provider>
    )
}
export { SimulationContext, SimulationProvider };