import axios from 'axios'

export const dummyApi = input => {
    return axios
    .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then (response =>{
        console.log(response);
        return response.data
    })
    .catch( err => {})
    
}         
