// middleware.js

import cors from "cors";
import bodyParser from "body-parser";
import { NextRequest, NextResponse } from "next/server";
export const corsMiddleware = cors();
export const jsonParser = bodyParser.json();




export function middleware(request) {
   
    const authData = JSON.parse(localStorage.getItem('auth'));
    const email = authData;
    console.log(email,"emailemail")


    if (email === undefined || email === null || !email ) {

        request.nextUrl.pathname = "/auth";
        return NextResponse.redirect(request.nextUrl);
    }
    else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        "/selfservicehome/",
    ]
};
