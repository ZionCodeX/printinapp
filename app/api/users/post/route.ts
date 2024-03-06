import { NextResponse } from "next/server";
import pool from "@/lib/db/mysql";


const date: Date = new Date();

export async function GET() {
    try {
        const db = await pool.getConnection();
        const sql = 'INSERT INTO `users`(`pid_user`, `email`, `password`, `created_at`, `updated_at`) VALUES ("user_123456", "keren@gmail.com", "555", "23/02/2024", "23/02/2024")';
        const [result, fields] = await db.query({sql,});
        db.release();

        return NextResponse.json("SUCCESS!");
        //return NextResponse.json(result);
        //return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}
