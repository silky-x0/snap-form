/*
  Warnings:

  - You are about to drop the column `provider` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `accounts` table. All the data in the column will be lost.
  - The `emailVerified` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[providerId,accountId]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountId` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FormType" AS ENUM ('SCROLL', 'STEP', 'CHAT');

-- DropIndex
DROP INDEX "accounts_provider_providerAccountId_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "provider",
DROP COLUMN "providerAccountId",
DROP COLUMN "type",
ADD COLUMN     "accountId" TEXT NOT NULL,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "providerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "forms" ADD COLUMN     "type" "FormType" NOT NULL DEFAULT 'SCROLL';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "emailVerified",
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "accounts_providerId_accountId_key" ON "accounts"("providerId", "accountId");
