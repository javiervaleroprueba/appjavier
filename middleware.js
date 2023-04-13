import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("myRifaToken")?.value;
  //console.log(jwt);

    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    try {
      const secretKey = new TextEncoder().encode("RIFA2023");
      const { payload } = await jwtVerify(jwt, secretKey, { algorithms: ['HS256'] });
      
      //console.log(payload);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
}

export const config = {
    matcher: ['/editar/:path*', '/api/listado' ],
}