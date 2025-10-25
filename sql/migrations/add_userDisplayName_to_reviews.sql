-- Migration: Add userDisplayName column to reviews table
-- Date: 2025-10-25
-- Description: Adds userDisplayName column to store the display name of users who create reviews

-- Check if column exists before adding (safe for multiple runs)
ALTER TABLE `reviews`
ADD COLUMN IF NOT EXISTS `userDisplayName` varchar(255) DEFAULT NULL AFTER `user`;

-- Optional: Update existing records to set userDisplayName from user field if needed
-- UPDATE `reviews` SET `userDisplayName` = `user` WHERE `userDisplayName` IS NULL;

SELECT 'Migration completed: userDisplayName column added to reviews table' as status;

