import { useEffect } from "react"
import api from "../../services/api"
import { 
    Container, 
    Table,
    TableContainer, 
    TableRow, 
    TableColumnContent 
} from "./style"

export const Simulation = () => {

    useEffect(()=>{
        api.get('/user/find/12103218400')
            .then((response)=>console.log(response.data))
            .catch((err)=>{
                console.error('erro'+ err);
            })
    },[])

    return(
        <Container>
            <h2>Veja a simulação para o seu empréstimo antes de efetivar</h2>
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableColumnContent>SALDO DEVEDOR</TableColumnContent>
                        <TableColumnContent>JUROS</TableColumnContent>
                        <TableColumnContent>SALDO DEVEDOR AJUSTADO</TableColumnContent>
                        <TableColumnContent>VALOR DA PARCELA</TableColumnContent>
                        <TableColumnContent>VENCIMENTO</TableColumnContent>
                    </TableRow>
                </Table>
            </TableContainer>
        </Container>
    )
}