import axios from "axios";

export const inventoryTicketService = ()=>{
    const inventoryGetAgentDetailsService = async(data:any)=>{
        try{
            console.log("================",data);
            

            const resp = await axios.get(`${process.env.PARMAR_URL}/getAgentDetails`,{
                headers: {
                    ...data, // Assuming `data` is an object containing your header information
                },
            })
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    const inventoryGetAttractionListService = async(data:any)=>{
        try{

            const resp = await axios.get(`${process.env.PARMAR_URL}/getAttractionList`,data)
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    const inventoryGetPriceForTicketTypeService = async(data:any)=>{
        try{

            const resp = await axios.get(`${process.env.PARMAR_URL}/getPriceForTicketType`,data)
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    const inventoryConfirmBookingService = async(data:any)=>{
        try{

            const resp = await axios.post(`${process.env.PARMAR_URL}/confirmBooking`,data)
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    return {inventoryGetAgentDetailsService,inventoryGetAttractionListService,inventoryGetPriceForTicketTypeService,inventoryConfirmBookingService}
}