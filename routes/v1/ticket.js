const express = require('express')
const router = express.Router()

const { ticketController } = require('../../modules').ticketModule


router.post('/') //add new ticket
router.patch('/:id') // modify a ticket by id
router.delete('/remove') // remove a ticket by id or MANY
router.get('/') // get all tickets
// router.post('/query?from=&to=&arrival&departure=')
router.get('/query/:id') // get tickets by query
