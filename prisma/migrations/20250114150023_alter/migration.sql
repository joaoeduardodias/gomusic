/*
  Warnings:

  - Made the column `theme_id` on table `songs` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "songs" DROP CONSTRAINT "songs_theme_id_fkey";

-- AlterTable
ALTER TABLE "songs" ALTER COLUMN "theme_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "songs" ADD CONSTRAINT "songs_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "themes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
