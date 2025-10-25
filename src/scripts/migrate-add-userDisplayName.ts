#!/usr/bin/env ts-node
/**
 * Migration Script: Add userDisplayName column to reviews table
 *
 * This script adds the userDisplayName column to the reviews table
 * without deleting any existing data.
 *
 * Usage:
 *   npm run migrate:userDisplayName
 *   or
 *   npx ts-node src/scripts/migrate-add-userDisplayName.ts
 */

import { db } from '../utils/db';

async function migrate() {
  try {
    console.log('🚀 Starting migration: Adding userDisplayName column to reviews table...');

    // Check if column already exists
    const [columns] = await db.query(`
      SELECT COLUMN_NAME
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = DATABASE()
        AND TABLE_NAME = 'reviews'
        AND COLUMN_NAME = 'userDisplayName'
    `);

    if (Array.isArray(columns) && columns.length > 0) {
      console.log('✅ Column userDisplayName already exists in reviews table. No migration needed.');
      process.exit(0);
    }

    // Add the column
    console.log('📝 Adding userDisplayName column...');
    await db.query(`
      ALTER TABLE reviews
      ADD COLUMN userDisplayName varchar(255) DEFAULT NULL AFTER user
    `);

    console.log('✅ Successfully added userDisplayName column to reviews table!');

    // Optional: Show current table structure
    const [tableStructure] = await db.query('DESCRIBE reviews');
    console.log('\n📋 Updated reviews table structure:');
    console.table(tableStructure);

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrate();
