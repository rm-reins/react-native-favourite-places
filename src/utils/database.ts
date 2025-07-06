import * as SQLite from "expo-sqlite";

export async function initDb() {
  const db = await SQLite.openDatabaseAsync("places.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    )
  `);
}
