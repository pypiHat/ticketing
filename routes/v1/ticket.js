const express = require('express')
const router = express.Router()

const { ticketController } = require('../../modules').ticketModule


router.post('', ticketController.createTicket) //add new ticket
// router.patch('/:id', ticketController.modifyTicket) // modify a ticket by id
// router.delete('/remove', ticketController.removeTicket) // remove a ticket by id or MANY
// router.get('/', ticketController.getAllTicket) // get all tickets
// // router.post('/query?from=&to=&arrival&departure=')
// router.get('/query/:id', ticketController.getTicketByQuery) // get tickets by query



module.exports = router;
