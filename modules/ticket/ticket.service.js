const db = require('../../db')

function createPermittedData(data) {
    const result = {};
    const permittedKeyChange = [
        "from_location",
        "to_location",
        "arrival_date",
        "departure_date",
        "unit_price",
        "count",
    ];
    for (const key of permittedKeyChange) {
      if (data.hasOwnProperty(key)) {
        result[key] = data[key];
      }
      else{
        throw new Error("not all required fileds included")
      }
    }
    return result;
  }


const addTicket = async (data) => {
    try {
        const result = await db.ticket.create({
            data: createPermittedData(data)
        })
        return result.id
    } catch (err) {
        throw new Error(err.message)
    }
    
}

module.exports = {
    addTicket
}