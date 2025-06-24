// import { Pool } from 'pg'

// export const db = new Pool({
//   connectionString: process.env.DATABASE_URL,
// })


"use server";

 import  {neon} from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL || "");

export default sql ;