import express, { Request, Response } from 'express';
import { inventoryTicketController } from '../controller/inventoryTicketController';
import { apiTicketController } from '../controller/apiTicketController';


const router = express.Router();

const {inventoryConfirmBooking,inventoryGetAgentDetails,inventoryGetAttractionList,inventoryGetPriceForTicketType} = inventoryTicketController()
const {apiConfirmBooking,apiGetAttractionList,apiGetPriceForTicketType,apiGetTimeSlotList,apiSaveBooking,apigetAgentDetails} = apiTicketController()
// --------inventory---------------------------
router.get('/agent-details', inventoryGetAgentDetails);
router.post('/confirm-booking', inventoryConfirmBooking);
router.get('/attraction-list', inventoryGetAttractionList);
router.get('/ticket-type', inventoryGetPriceForTicketType);

// --------api---------------------------
router.post('/agent-details', apigetAgentDetails);
router.post('/confirm-booking', apiConfirmBooking);
router.post('/attraction-list', apiGetAttractionList);
router.post('/ticket-type', apiGetPriceForTicketType);
router.post('/save-booking', apiSaveBooking);
router.post('/time-slot-list', apiGetTimeSlotList);


// Test route
router.get('/test', (req: Request, res: Response) => {
  console.log('test');
  res.send('Test route');
});

export default router;
