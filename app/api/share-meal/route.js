import { NextResponse } from "next/server";
import sql from "better-sqlite3";

const db = sql("meals.db"); // Подключение к базе SQLite

export async function POST(req) {
  try {
    const data = await req.json();

    // ..... Короче эта хуета видимо даже не получает req.json() и уже здесь вылетает ошибка. Ich gebe auf :D
    // R.I.P. - Rest In Peace Mark 31.01.2025 22:11

    const stmt = db.prepare(
      `INSERT INTO meals VALUES (
        null,
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
     )`
    );

    const info = stmt.run(data);
    return NextResponse.json({ success: true, info }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to submit form" },
      { status: 500 }
    );
  }
}
