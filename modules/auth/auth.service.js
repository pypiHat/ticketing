const db = require('../../db')


function createPermittedData(data) {
    const result = {};
    const permittedKeyChange = [
      "fname",
      "lname",
      "avatar_url",
      "registration_date",
      "phone",
      "birthday",
      "password",
    ];
    for (const key of permittedKeyChange) {
      if (data.hasOwnProperty(key)) {
        result[key] = data[key];
      }
    }
    return result;
  }

const register = async (data) => {
    try {
        const user = await db.user.create({
            data: createPermittedData(data)
        })
        return user.id;
    } catch (err) {
        throw new Error(err.message)
    }
}


module.exports = {
    register
}