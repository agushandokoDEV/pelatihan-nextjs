import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

export default function middleware(req) {
    console.log('============================ Middleware Global REQUEST PAGE =============================')

    const { token } = req.cookies;
    const page = req.page
    const url = req.nextUrl.clone()
    console.log('request.nextUrl.clone() ', url.pathname)
    console.log('Middleware Global REQUEST PAGE ', page)

    if (typeof window !== 'undefined') {
        var localstorage = localStorage.getItem("current_url");
        console.log('Middleware Global localstorage : ', localstorage)
    }

    if (token) {
        console.log('Middleware Global TOKEN : ', token)
        if (page.name === '/login' || page.name === '/signup') {
            return NextResponse.redirect('/');
        }

        // verify a token symmetric - synchronous
        // var decoded = jwt.verify(token, '(!*@yRC0kUh8MY@W4kOol%@*D5uHxRMyLH!!&^)');
        // console.log('Middleware Global URL TOKEN verify: ', decoded)
    } else {
        console.log('Middleware Global TOKEN : NO')
        if (page.name != '/login' && page.name != undefined && !req.cookies.token) {
            return NextResponse.redirect('/login');
        }
    }
}