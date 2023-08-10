-- CreateTable
CREATE TABLE `musics_themes` (
    `id` VARCHAR(191) NOT NULL,
    `music_id` VARCHAR(191) NULL,
    `theme_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `musics_themes` ADD CONSTRAINT `musics_themes_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `musics`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `musics_themes` ADD CONSTRAINT `musics_themes_theme_id_fkey` FOREIGN KEY (`theme_id`) REFERENCES `themes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
