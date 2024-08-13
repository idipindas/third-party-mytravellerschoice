import { Request, Response } from "express";
import { apiTicketService } from "../services/apiTicketService";
import { agentDetailsSchema } from "../validator/agentDetilsValidator";
import { timeSlotSchema } from "../validator/attractionListValidator";
import { typeTicketSchema } from "../validator/typeTicketPriceValidator";
import { saveBookingValidator } from "../validator/saveBookingValidator";
import { confirmBookingValidator } from "../validator/confirmBookingValidator";
const {
  apiGetAgentDetailServices,
  apiConfirmBookingServices,
  apiGetAttractionListServices,
  apiGetPriceForTicketTypeServices,
  apiSaveBookingServices,
  apiGetTimeSlotListServices,
} = apiTicketService();

export const apiTicketController = () => {
  const apigetAgentDetails = async (req: Request, res: Response) => {
    try {
      const { error, value } = agentDetailsSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;

      const response = await apiGetAgentDetailServices(data);

      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const apiConfirmBooking = async (req: Request, res: Response) => {
    try {
      const { error, value } = confirmBookingValidator.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;
      const response = await apiConfirmBookingServices(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const apiGetAttractionList = async (req: Request, res: Response) => {
    try {
      const { error, value } = agentDetailsSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;
      const response = await apiGetAttractionListServices(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const apiGetPriceForTicketType = async (req: Request, res: Response) => {
    try {
      const { error, value } = typeTicketSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;
      const response = await apiGetPriceForTicketTypeServices(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const apiSaveBooking = async (req: Request, res: Response) => {
    try {
      const { error, value } = saveBookingValidator.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;
      const response = await apiSaveBookingServices(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const apiGetTimeSlotList = async (req: Request, res: Response) => {
    try {
      const { error, value } = timeSlotSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;
      const response = await apiGetTimeSlotListServices(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  return {
    apigetAgentDetails,
    apiConfirmBooking,
    apiGetAttractionList,
    apiGetPriceForTicketType,
    apiSaveBooking,
    apiGetTimeSlotList,
  };
};
