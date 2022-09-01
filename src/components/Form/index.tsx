import { Container, FormContainer, InputForm } from "./style";
import { useForm } from 'react-hook-form';
import { Button } from "../Button";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../services/api";

interface IFormData{
    cpf: string;
    city: string;
    birthdate: string;
    loan: number;
    parcel: number;
}

export const Form = () => {

    const { register, setValue, handleSubmit, formState: { errors }, getValues} = useForm<IFormData>();
    const [ validParcel, setValidParcel ] = useState(Number);
    const [simulation, setSimulation] = useState();
    useEffect(()=>{
        console.log(validParcel);   
    },[validParcel]);

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        api.post('/loan/simulate',{
            "birthday": "29/01/1999",
            "uf": "MG",
            "cpf": "12103218400",
            "parcelValue": data.parcel,
            "value": data.loan
        })
            .then((response)=>setSimulation(response.data))
            .catch((err)=>{
                console.error('error'+err);
            })
    });

    console.log(simulation);
    return(
        <Container>
            <h2>Preencha o formulário abaixo para simular</h2>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <InputForm 
                        {...register('cpf', { required: true})}
                        placeholder="CPF" 
                        type="text"
                    />
                    <InputForm 
                        {...register('city', { required: true})}
                        placeholder="UF" 
                        type="text"
                    />
                    <InputForm
                        {...register('birthdate', { required: true})} 
                        placeholder="DATA DE NASCIMENTO" 
                        type="text"
                    />
                    <InputForm 
                        {...register('loan', { required: true})}
                        placeholder="QUAL O VALOR DO EMPRÉSTIMO" 
                        type="number"
                        defaultValue={50000}
                        onChange={()=>setValidParcel(getValues('loan'))}
                    />
                    <InputForm 
                        {...register('parcel', { required: true, min: 0})}
                        placeholder="QUAL VALOR QUE DESEJA PAGAR POR MÊS?" 
                        type="number"
                    />
                    <Button text={"Simular"} size={"lg"} color={"primary"}></Button>
                </form>
            </FormContainer>
        </Container>
    )
}