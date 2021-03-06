import axios from "axios";


const API_URL = 'https://bruno-aulas-sds2.herokuapp.com';
function fetchOrders(){
    return axios(`${API_URL}/orders`);
}

export default fetchOrders;

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}