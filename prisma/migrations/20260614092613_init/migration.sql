-- CreateTable
CREATE TABLE "Trainer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "surname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "patronymic" TEXT,
    "phone" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'WORKING'
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "surname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "patronymic" TEXT,
    "birthday" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "trainer_id" TEXT,
    "locker_id" TEXT,
    CONSTRAINT "Client_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "Trainer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Locker" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "client_id" TEXT,
    CONSTRAINT "Locker_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ClientService" (
    "client_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,

    PRIMARY KEY ("client_id", "service_id"),
    CONSTRAINT "ClientService_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ClientService_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_locker_id_key" ON "Client"("locker_id");

-- CreateIndex
CREATE UNIQUE INDEX "Locker_number_key" ON "Locker"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Locker_client_id_key" ON "Locker"("client_id");
