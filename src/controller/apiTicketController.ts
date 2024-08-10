import { Request, Response } from "express"
import { apiTicketService } from "../services/apiTicketService"
const {apiGetAgentDetailServices,apiConfirmBookingServices,apiGetAttractionListServices,apiGetPriceForTicketTypeServices,apiSaveBookingServices,apiGetTimeSlotListServices} = apiTicketService()

export const apiTicketController = ()=>{

    const apigetAgentDetails = async(req:Request,res:Response)=>{
        try{
            const data = req.body
            console.log('da',data)
            // const response = await apiGetAgentDetailServices(data)
            res.status(200).json(data)
        }catch(error:any){
            res.status(500).json({message:error.message})
        }
    }
    const apiConfirmBooking = async(req:Request,res:Response)=>{
        try{
            const data = req.body
            const response = await apiConfirmBookingServices(data)
            res.status(200).json(response.data)
        }catch(error:any){
            res.status(500).json({message:error.message})
        }
    }
    const apiGetAttractionList = async(req:Request,res:Response)=>{
        try{
            const data = req.body
            const response = await apiGetAttractionListServices(data)
            res.status(200).json(response.data)
        }catch(error:any){
            res.status(500).json({message:error.message})
        }
    }
    const apiGetPriceForTicketType = async(req:Request,res:Response)=>{
        try{
            const data = req.body
            const response = await apiGetPriceForTicketTypeServices(data)
            res.status(200).json(response.data)
        }catch(error:any){
            res.status(500).json({message:error.message})
        }
    }
    const apiSaveBooking = async(req:Request,res:Response)=>{
        try{
            const data = req.body
            const response = await apiSaveBookingServices(data)
            res.status(200).json(response.data)
        }catch(error:any){
            res.status(500).json({message:error.message})
        }
    }
    const apiGetTimeSlotList = async(req:Request,res:Response)=>{
        try{
            const data = req.body
            const response = await apiGetTimeSlotListServices(data)
            res.status(200).json(response.data)
        }catch(error:any){
            res.status(500).json({message:error.message})
        }
    }
    return {apigetAgentDetails,apiConfirmBooking,apiGetAttractionList,apiGetPriceForTicketType,apiSaveBooking,apiGetTimeSlotList}

}