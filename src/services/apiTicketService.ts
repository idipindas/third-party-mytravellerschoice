import axios from "axios";

export const apiTicketService = ()=>{

    const apiGetAgentDetailServices =async (data:any)=>{
        console.log('t1',data)

        try{
          
            const resp = await axios.post (`${process.env.PARMAR_URL}/getAgentDetails`,data)

            

            console.log('t2',resp?.data)
            return resp?.data


        }catch(error:any){
            console.log("t3",error);
            
            throw new error;
        }

    }
const apiGetAttractionListServices =async(data:any)=>{
    try{
        
        const resp = await axios.post(`${process.env.PARMAR_URL}/getAttractionList`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}
const apiGetTimeSlotListServices =async(data:any)=>{
    try{
        
        const resp = await axios.post(`${process.env.PARMAR_URL}/getTimeSlotList`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}

const apiGetPriceForTicketTypeServices =async(data:any)=>{
    try{
        
        const resp = await axios.post(`${process.env.PARMAR_URL}/getPriceForTicketType`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}
const apiSaveBookingServices =async(data:any)=>{
    try{
        
        const resp = await axios.post(`${process.env.PARMAR_URL}/saveBooking`,data)
        console.log(resp)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}
const apiConfirmBookingServices =async(data:any)=>{
    try{
        
        const resp = await axios.post(`${process.env.PARMAR_URL}/confirmBooking`,data)
        return resp
    }catch(error:any)
    {
        console.log(error);

        throw new error;
    }
}

    return {apiGetAgentDetailServices,apiConfirmBookingServices,apiGetAttractionListServices,apiGetPriceForTicketTypeServices,apiSaveBookingServices,apiGetTimeSlotListServices}
}