import axios from 'axios';

const api = axios.create({
    baseURL: 'https://loan.loandesafio2022.ga'
    
})

export default api;