// src/app/_middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(req: NextRequest) {
  const { isAuthenticated } = getKindeServerSession(req);

  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL('/api/auth/verify-email?post_verify_email_redirect_url=https://techtutors.vercel.app/', req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
