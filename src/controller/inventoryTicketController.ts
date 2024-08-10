import { Request, Response } from "express"
import { inventoryTicketService } from "../services/inventoryTicketService"

const {inventoryConfirmBookingService,inventoryGetAgentDetailsService,inventoryGetAttractionListService,inventoryGetPriceForTicketTypeService} = inventoryTicketService()

export const inventoryTicketController = ()=>{

    const inventoryConfirmBooking = async(req:Request,res:Response)=>{
        try{
            const data =req?.body;

            const response = await inventoryConfirmBookingService(data)
            res.status(200).json(response.data)

        }catch(error:any){
            res.status(500).json({message:error.message})

        }
    }
    const inventoryGetAgentDetails = async(req:Request,res:Response)=>{
        try{
            const data =req?.body;

            const response = await inventoryGetAgentDetailsService(data)
            res.status(200).json(response.data)

        }catch(error:any){
            res.status(500).json({message:error.message})

        }
    }
    const inventoryGetAttractionList = async(req:Request,res:Response)=>{
        try{
            const data =req?.body;

            const response = await inventoryGetAttractionListService(data)
            res.status(200).json(response.data)

        }catch(error:any){
            res.status(500).json({message:error.message})

        }
    }
    const inventoryGetPriceForTicketType = async(req:Request,res:Response)=>{
        try{
            const data =req?.body;

            const response = await inventoryGetPriceForTicketTypeService(data)
            res.status(200).json(response.data)

        }catch(error:any){
            res.status(500).json({message:error.message})

        }
    }
    return {inventoryConfirmBooking,inventoryGetAgentDetails,inventoryGetAttractionList,inventoryGetPriceForTicketType}
    
}