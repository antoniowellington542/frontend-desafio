import { Container, FormContainer, InputForm, MessageError, Title } from "./style";
import { useForm } from 'react-hook-form';
import { Button } from "../Button";
import { useContext, useEffect, useState } from "react";
import { SimulationContext } from '../../context/simulation';
import api from "../../services/api";
import { IFormData } from "../../interfaces/IFormData";



export const Form = () => {

    const { register, setValue, handleSubmit, formState: { errors }, getValues} = useForm<IFormData>();
    const [ validParcel, setValidParcel ] = useState();
    const { setSimulation } = useContext(SimulationContext);

    const onSubmit = handleSubmit(async (data) => {
        const { birthday, cpf,uf } = data;
        const parcelValue = Number(data.parcelValue);
        const value = Number(data.value);
        await api.post('/loan/simulate',{
            birthday,
            uf,
            cpf,
            parcelValue,
            value
        },{headers: {'Content-Type': 'application/json',}})
            .then((response)=> setSimulation(response.data.simulation))
            .catch((err)=>{
                console.error('error'+err);
            }); 
    });
    
   
    return(
        <Container>
            <Title>Preencha o formulário abaixo para simular</Title>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <InputForm 
                        {...register('cpf', { required: true})}
                        placeholder="CPF" 
                        type="text"
                    />
                    {errors.cpf && (<MessageError>Campo não pode estar vazio!</MessageError>)}
                    <InputForm 
                        {...register('uf', { required: true})}
                        placeholder="UF" 
                        type="text"
                    />
                    {errors.uf && (<MessageError>Campo não pode estar vazio!</MessageError>)}
                    <InputForm
                        {...register('birthday', { required: true})} 
                        placeholder="DATA DE NASCIMENTO" 
                        type="text"
                    />
                    {errors.birthday && (<MessageError>Campo não pode estar vazio!</MessageError>)}
                    <InputForm 
                        {...register('value', { required: true, min:50000})}
                        placeholder="QUAL O VALOR DO EMPRÉSTIMO" 
                        type="number"
                    />
                    {errors.value && (<MessageError>Valor tem que acima de 50000!</MessageError>)}
                    <InputForm 
                        {...register('parcelValue', { required: true, min: 0})}
                        placeholder="QUAL VALOR QUE DESEJA PAGAR POR MÊS?" 
                        type="number"
                    />
                    {errors.parcelValue && (<MessageError>Valor muito abaixo!</MessageError>)}
                    <Button text="Simular" color="primary" size="lg"/>
                </form>
            </FormContainer>
        </Container>
    )
}