const db = require('../../db')

async function getUserById(id){
  return await db.user.findUnique({
    where:{
      id
    },
  });
};

async function getUserByPhone(mobile){
  return await db.user.findUnique({
    where: {
      phone: mobile,
    },
  });
};

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


const removeUser = async (id) => {
  try {
    const result = await db.user.delete({
      where: {
        id: id
      },
    });
  } catch (err) {
      throw new Error(err.message)
  }
}

module.exports = {
    register,
    getUserById,
    getUserByPhone,
    removeUser,
}