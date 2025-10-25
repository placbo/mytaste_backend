# Database Migration: Add userDisplayName to Reviews

## Overview
This migration adds a `userDisplayName` column to the `reviews` table to store the display name of users who create reviews.

## What Gets Changed
- **Table:** `reviews`
- **New Column:** `userDisplayName` (varchar(255), nullable)
- **Position:** After the `user` column
- **Default Value:** NULL

## Migration Files
1. **SQL Migration:** `sql/migrations/add_userDisplayName_to_reviews.sql`
2. **TypeScript Script:** `src/scripts/migrate-add-userDisplayName.ts`

## How to Run

### Option 1: Using npm script (Recommended)
```bash
npm run migrate:userDisplayName
```

### Option 2: Using ts-node directly
```bash
npx ts-node src/scripts/migrate-add-userDisplayName.ts
```

### Option 3: Using SQL file directly
```bash
mysql -u your_username -p your_database < sql/migrations/add_userDisplayName_to_reviews.sql
```

## Safety Features
- ✅ **Non-destructive:** No data will be deleted
- ✅ **Idempotent:** Safe to run multiple times (checks if column exists)
- ✅ **Backwards compatible:** Existing code continues to work

## What Happens to Existing Data?
- All existing reviews remain untouched
- The new column will be `NULL` for existing reviews
- New reviews will automatically populate this field with the user's display name

## Rollback (if needed)
If you need to remove the column:
```sql
ALTER TABLE reviews DROP COLUMN userDisplayName;
```

## Verification
After running the migration, verify it worked:
```sql
DESCRIBE reviews;
```

You should see `userDisplayName` listed in the table structure.

## Notes
- Make sure your `.env` file has the correct database credentials
- The migration script will automatically connect using your existing database configuration
- It's recommended to backup your database before running migrations in production

