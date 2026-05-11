-- AlterTable
ALTER TABLE "Specs" ADD COLUMN     "batteryCapacity" TEXT,
ADD COLUMN     "combinedHorsepower" INTEGER,
ADD COLUMN     "electricMotor" TEXT,
ALTER COLUMN "engine" DROP NOT NULL;
