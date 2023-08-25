import axios from "axios";

// GET
export function getContactsService(){
    return axios.get('/contacts').then((res) => res.data)
}

// POST
export function postContactService(name, number, org, email){
    return axios.post('/contacts', {
        name, 
        number, org, email
    }).then((res) => res.data)
}

// DELETE
export function deleteContactService(id){
    return axios.delete(`/contacts/${id}`)
    .then((res) => res.data)
}