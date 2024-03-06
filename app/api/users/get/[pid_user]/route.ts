import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db/mysql";


export async function GET(
    request:  NextRequest,
    { params }: { params: { pid_user: string } }
) {
    const pid_user = params.pid_user // user id
    
    try {
        const db = await pool.getConnection()        
        
        const query = 'select * from users where pid_user = ?'
        const [rows] = await db.execute(query,[pid_user])
        db.release()
        
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}