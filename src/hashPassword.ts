#!/usr/bin/env node

import bcrypt from 'bcrypt';
import readline from 'readline';

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter password to hash: ', async (password) => {
    const hashedPassword = await hashPassword(password);
    console.log(`Hashed Password: ${hashedPassword}`);
    rl.close();
  });
}
