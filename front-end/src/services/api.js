import axios from 'axios'

const api =axios.create({
    baseURL: 'https://raizes-do-vale-api.onrender.com'
})

export default api