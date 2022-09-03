import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { IOperationStatus } from "../interfaces/IOperationStatus";
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
    setSimulation: ()=>{},
    operation: {
        executed: false,
        success: false,
        message: ''
    },
    setOperation: ()=>{},
    clicked: false,
    setClicked: ()=>{},
}



interface IContextProps{
    simulation: ISimulation;
    setSimulation: Dispatch<SetStateAction<ISimulation>>;
    operation: IOperationStatus;
    setOperation: Dispatch<SetStateAction<IOperationStatus>>;
    clicked: boolean;
    setClicked: Dispatch<SetStateAction<boolean>>;
}

interface Props{
    children: ReactNode;
}

const SimulationContext = createContext<IContextProps>(DEFAULT_VALUE);

const SimulationProvider: FC<Props> = ({ children })=>{
    const [simulation, setSimulation] = useState(DEFAULT_VALUE.simulation);
    const [operation, setOperation] = useState(DEFAULT_VALUE.operation);
    const [clicked, setClicked] = useState(DEFAULT_VALUE.clicked);
    return(
        <SimulationContext.Provider 
            value={{
                simulation, 
                setSimulation, 
                operation, 
                setOperation,
                clicked,
                setClicked
            }}>
            {children}
        </SimulationContext.Provider>
    )
}
export { SimulationContext, SimulationProvider };