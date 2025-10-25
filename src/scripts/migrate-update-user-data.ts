#!/usr/bin/env ts-node
/**
 * Migration Script: Update user data in reviews table
 *
 * This script updates the user column from "perbjester@gmail.com" and "pcb"
 * to "113733715503325991771" and sets userDisplayName to "Per Christian Bjelke"
 * for all affected rows.
 *
 * Usage:
 *   npm run migrate:updateUserData
 *   or
 *   npx ts-node src/scripts/migrate-update-user-data.ts
 */

import { db } from '../utils/db';

async function migrate() {
  try {
    console.log('🚀 Starting migration: Updating user data in reviews table...');

    // Check how many rows will be affected
    const [rowsToUpdate] = await db.query(`
      SELECT COUNT(*) as count
      FROM reviews
      WHERE user IN ('perbjester@gmail.com', 'pcb')
    `);

    const count = Array.isArray(rowsToUpdate) && rowsToUpdate.length > 0 ? (rowsToUpdate[0] as any).count : 0;

    console.log(`📊 Found ${count} rows to update`);

    if (count === 0) {
      console.log('✅ No rows to update. Migration complete.');
      process.exit(0);
    }

    // Show rows before update
    const [beforeUpdate] = await db.query(`
      SELECT reviewId, user, userDisplayName, comment
      FROM reviews
      WHERE user IN ('perbjester@gmail.com', 'pcb')
      LIMIT 10
    `);

    console.log('\n📋 Sample of rows before update (max 10):');
    console.table(beforeUpdate);

    // Perform the update
    console.log('\n📝 Updating user and userDisplayName columns...');
    const [result] = await db.query(`
      UPDATE reviews
      SET user = '113733715503325991771',
          userDisplayName = 'Per Christian Bjelke'
      WHERE user IN ('perbjester@gmail.com', 'pcb')
    `);

    const affectedRows = (result as any).affectedRows || 0;
    console.log(`✅ Successfully updated ${affectedRows} rows!`);

    // Show rows after update
    const [afterUpdate] = await db.query(`
      SELECT reviewId, user, userDisplayName, comment
      FROM reviews
      WHERE user = '113733715503325991771'
      LIMIT 10
    `);

    console.log('\n📋 Sample of updated rows (max 10):');
    console.table(afterUpdate);

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrate();
