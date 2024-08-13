import { Request, Response } from "express";
import { inventoryTicketService } from "../services/inventoryTicketService";
import { confirmBookingValidator } from "../validator/confirmBookingValidator";
import { agentDetailsSchema } from "../validator/agentDetilsValidator";
import { typeTicketSchema } from "../validator/typeTicketPriceValidator";

const {
  inventoryConfirmBookingService,
  inventoryGetAgentDetailsService,
  inventoryGetAttractionListService,
  inventoryGetPriceForTicketTypeService,
} = inventoryTicketService();

export const inventoryTicketController = () => {
  const inventoryConfirmBooking = async (req: Request, res: Response) => {
    try {
      const { error, value } = confirmBookingValidator.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;
      const response = await inventoryConfirmBookingService(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const inventoryGetAgentDetails = async (req: Request, res: Response) => {
    try {
      const { error, value } = agentDetailsSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;

      const response = await inventoryGetAgentDetailsService(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const inventoryGetAttractionList = async (req: Request, res: Response) => {
    try {
      const { error, value } = agentDetailsSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation failed",
          details: error.details.map((err:any) => err.message),
        });
      }

      const data = value;

      const response = await inventoryGetAttractionListService(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  const inventoryGetPriceForTicketType = async (
    req: Request,
    res: Response
  ) => {
    try {
        const { error, value } = typeTicketSchema.validate(req.body);
        if (error) {
          return res.status(400).json({
            message: "Validation failed",
            details: error.details.map((err:any) => err.message),
          });
        }
  
        const data = value;
      const response = await inventoryGetPriceForTicketTypeService(data);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  return {
    inventoryConfirmBooking,
    inventoryGetAgentDetails,
    inventoryGetAttractionList,
    inventoryGetPriceForTicketType,
  };
};
