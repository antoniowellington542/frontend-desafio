import { Dispatch, SetStateAction, useContext } from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form"
import { Simulation } from "../../components/Simulation"
import { SimulationContext } from "../../context/simulation";
import { Container, Content, MessageModal, Modal, ModalError, ModalSuccess, Title } from "./styles"
import { BiCommentError } from 'react-icons/bi';
import {BsCheckCircle } from 'react-icons/bs';

export const Home = () =>{

    const {operation, setOperation} = useContext(SimulationContext);

    const closeModal = () =>{
        setOperation({
            executed: false,
            success: false,
            message: ''
        });
    }

    return(
        <Container>
            {operation.executed && (
            <Modal>
                <MessageModal>
                    {operation.success ? (
                        <ModalSuccess>
                            <BsCheckCircle size={96} color="#FFFFFF" />
                        </ModalSuccess>
                    ): <ModalError>
                            <BiCommentError size={96} color="#FFFFFF"/>
                        </ModalError>}
                    <h1 style={{paddingTop: '2em'}}>{operation.message}</h1>
                    <Button 
                        text="try Again"
                        size="sm" 
                        color="primary"
                        onClick={closeModal}
                    />
                </MessageModal>
            </Modal>
            )}
            <Content>
                <Title>Simule e solicite o seu empréstimo</Title>
                <Form />
                <Simulation/>
            </Content>
        </Container>
    )
}