import { NextRequest } from "next/server";

export default function middleware(req:NextRequest){
     // Get the full URL from the request
  const url = req.nextUrl;
  
  // Extract the pathname (route) from the URL
  const pathname = url.pathname;

  // Log the pathname
  console.log('Current Path:', pathname);
}

export const config = {
    matcher: ['/about','/contact']
  }