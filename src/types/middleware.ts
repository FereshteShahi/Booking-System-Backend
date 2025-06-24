import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import sql from "@/src/lib/postgre";
 

export function middleware(request : NextRequest) {
    //mikhahim middleware ra baraye hame route ha estefade konim faghat routhayi ke inja hast na
    const publicPaths = ["/"];
        //ba in khat maloom mikonim ke koja hastim
    const {pathname}= request.nextUrl;
    if(publicPaths.includes(pathname)){
        //agar dar in route ha hastim token ra überprufen nemikonim chon token nemikhahad
        return NextResponse.next();

    }


    const token =request.cookies.get("token")?.value;

    if(!token){
        return  NextResponse.redirect("http://localhost:3000");
    }
const tokenDatabase = sql `SELECT * FROM token WHERE token = ${token}`;

if(!tokenDatabase){
    return NextResponse.redirect("http://localhost:3000");
}
//ma ra az middleware rad mikonad va mitawanim Obur konim az middleware ba loghate next 
return NextResponse.next();
} 
//matcher  ham dar miidleware va ham dar next.config.ts bayad bashad
export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|api|register|login).*)",
    ]
}