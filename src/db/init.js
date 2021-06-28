const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    /*  
    |     rooms     |
    |---------------|
    | id*  | pass   |
    | int  | string |
    */

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`);

    /*  
    |          questions          |
    |-----------------------------|
    | id*  | titulo | read | room |
    | int  | string | int  | int  |
    */

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      read INT,  
      room INT,  
    )`);

    await db.close();
  }
}

initDb.init();