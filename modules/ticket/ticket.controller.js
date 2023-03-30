const ticketService = require('./ticket.service')


const createTicket = async (req, res, next) => {
    try {
        console.log(1111);
        const ticketId = await ticketService.addTicket(req.body)
        console.log(111122222);
        console.log(ticketId);
        return res.status(201).json(ticketId);    
    } catch (err) {
        console.log(111145444444);
        next(err)
    }
    
}

const modifyTicket = async (req, res, next) => {
    console.log('there');
}

const removeTicket = async (req, res, next) => {
    console.log('there');
}

const getAllTicket = async (req, res, next) => {
    console.log('there');
}

const getTicketByQuery = async (req, res, next) => {
    console.log('there');
}


module.exports = {
    createTicket,

}