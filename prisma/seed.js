const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const userData = [
    {
        fname: "Parham",
        lname: "mk",
        avatar_url: "https://example.com/avatar.jpg",
        phone: "+09127654321",
        birthday: "1990-01-01T00:00:00.000Z",
        password: "123456"
    },
    {
        fname:"Mamali",
        lname:"HajMamal",
        registration_date:"2022-03-28T12:00:00.000Z",
        phone:"09121234567",
        birthday:"1995-02-15T00:00:00.000Z",
        password:"123456",
    },
    {
        fname:"behroooz",
        lname:"rasaii",
        registration_date:"2022-03-28T12:00:00.000Z",
        phone:"09111234567",
        birthday:"1995-02-15T00:00:00.000Z",
        password:"123456",
    }
]
    
const TicketData = [
    {
        from_location: "Tehran",
        to_location: "Mashhad",
        arrival_date: "2022-04-15T00:00:00.000Z",
        departure_date: "2022-04-16T00:00:00.000Z",
        unit_price: 300.0,
        count: 2,
    },
    {
        from_location: "Mashhad",
        to_location: "Tehran",
        arrival_date: "2022-04-15T00:00:00.000Z",
        departure_date: "2022-04-16T00:00:00.000Z",
        unit_price: 500.0,
        count: 1
    },
    {
        from_location: "Tehran",
        to_location: "Esfahan",
        arrival_date: "2022-04-15T00:00:00.000Z",
        departure_date: "2022-04-16T00:00:00.000Z",
        unit_price: 100.0,
        count: 3,
    },

];


async function main(){
    for (const user of userData){
        const userObject = await prisma.user.create({
            data: user,
        });
        console.log(`Created user with id: ${userObject.id}`);
    }

    for (const ticket of TicketData){
        const ticketObject = await prisma.ticket.create({
            data: ticket,
        });
        console.log(`Created ticket with id: ${ticketObject.id}`);
    }
    console.log("seed ended");
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

