import { getToken } from "next-auth/jwt"
import { NextApiResponse, NextResponse } from "next/server"

export async function middleware(req){
  const token = await getToken({req , secret: process.env.JWT_SECRET})

  const { pathname } = req.nextUrl

  //Allow the requst if the following is true..
  // 
  if(pathname.includes('/api/auth') || token){
    return NextResponse.next() //basically saying "carry on"
  }

  if(pathname.includes('/img') || token){
    return NextResponse.next() //basically saying "carry on"
  }

  //
  if(!token && pathname !== "/login"){
    return NextResponse.redirect("/login")
  }

}