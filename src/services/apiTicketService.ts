import axios from "axios";
import { BASE_URL } from "../config/parmarConfig";

export const apiTicketService = ()=>{

    const apiGetAgentDetailServices =async (data:any)=>{
        console.log('t1',data)

        try{
            // const resp =await  axios.post(`https://parmartours.com:8443/parmartour/Test/getAgentDetails`,data)
            // const resp = await axios.post (`${BASE_URL}/getAgentDetails`,data)
            const resp = await axios.post (`${process.env.PARMAR_URL_TEST}/getAgentDetails`,data)

            

            console.log('t2',resp?.data,process.env.PARMAR_URL_TEST)
            return resp?.data


        }catch(error:any){
            console.log("t3",error);
            
            throw new error;
        }

    }
const apiGetAttractionListServices =(data:any)=>{
    try{
        
        const resp = axios.post(`${BASE_URL}/getAttractionList`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}
const apiGetTimeSlotListServices =(data:any)=>{
    try{
        
        const resp = axios.post(`${BASE_URL}/getTimeSlotList`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}

const apiGetPriceForTicketTypeServices =(data:any)=>{
    try{
        
        const resp = axios.post(`${BASE_URL}/getPriceForTicketType`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}
const apiSaveBookingServices =(data:any)=>{
    try{
        
        const resp = axios.post(`${BASE_URL}/saveBooking`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}
const apiConfirmBookingServices =(data:any)=>{
    try{
        
        const resp = axios.post(`${BASE_URL}/confirmBooking`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}

    return {apiGetAgentDetailServices,apiConfirmBookingServices,apiGetAttractionListServices,apiGetPriceForTicketTypeServices,apiSaveBookingServices,apiGetTimeSlotListServices}
}