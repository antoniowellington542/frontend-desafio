import { Container, FormContainer, InputForm, MessageError, Title } from "./style";
import { useForm } from 'react-hook-form';
import { Button } from "../Button";
import { useContext, useEffect, useState } from "react";
import { SimulationContext } from '../../context/simulation';
import api from "../../services/api";
import { IFormData } from "../../interfaces/IFormData";
import createSimulation from "../../services/createSimulation";
import { ISimulation } from "../../interfaces/ISimulation";



export const Form = () => {

    const { register, setValue, handleSubmit, formState: { errors }, getValues} = useForm<IFormData>();
    const [ validParcel, setValidParcel ] = useState<number>(0);
    const { setSimulation, setClicked } = useContext(SimulationContext);

    const onSubmit = handleSubmit(async (data) => {
        await createSimulation({data, setClicked,setSimulation});
    });

    return(
        <Container>
            <Title>Preencha o formulário abaixo para simular</Title>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <InputForm 
                        {...register('cpf', { 
                            required: true, 
                            
                        })}
                        placeholder="CPF" 
                        type="text"
                    />
                    {errors.cpf && (<MessageError>Cpf inválido</MessageError>)}
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
                        onInput={()=>setValidParcel(Number(getValues('value')))}
                    />
                    {errors.value && (<MessageError>Valor tem que acima de 50000!</MessageError>)}
                    <InputForm 
                        {...register('parcelValue', { required: true, min: validParcel*0.01})}
                        placeholder="QUAL VALOR QUE DESEJA PAGAR POR MÊS?" 
                        type="number"
                    />
                    {errors.parcelValue && (<MessageError>Minimo de 1% do valor do empréstimo!</MessageError>)}
                    <Button text="Simular" color="primary" size="lg"/>
                </form>
            </FormContainer>
        </Container>
    )
}