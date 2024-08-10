import axios from "axios";
import { BASE_URL } from "../config/parmarConfig";

export const inventoryTicketService = ()=>{
    const inventoryGetAgentDetailsService = async(data:any)=>{
        try{

            const resp = await axios.get(`${BASE_URL}/getAgentDetails`,data)
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    const inventoryGetAttractionListService = async(data:any)=>{
        try{

            const resp = await axios.get(`${BASE_URL}/getAttractionList`,data)
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    const inventoryGetPriceForTicketTypeService = async(data:any)=>{
        try{

            const resp = await axios.get(`${BASE_URL}/getPriceForTicketType`,data)
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    const inventoryConfirmBookingService = async(data:any)=>{
        try{

            const resp = await axios.post(`${BASE_URL}/confirmBooking`,data)
            return resp
        }catch(error:any){
            console.log(error);

            throw new error;
        }
    }
    return {inventoryGetAgentDetailsService,inventoryGetAttractionListService,inventoryGetPriceForTicketTypeService,inventoryConfirmBookingService}
}