-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "registration_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "from_location" TEXT NOT NULL,
    "to_location" TEXT NOT NULL,
    "arrival_date" TEXT NOT NULL,
    "departure_date" TEXT NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "avatar_url" TEXT,
    "registration_date" TIMESTAMP(3),
    "phone" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
