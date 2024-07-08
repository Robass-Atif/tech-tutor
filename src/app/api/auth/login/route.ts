// import { NextResponse } from 'next/server';

// import { getKindeAuthClient } from '@kinde-oss/kinde-auth-nextjs/server';


// export async function GET() {
//   const client = getKindeAuthClient();
//   const loginUrl = client.getLoginURL({
//     redirect_uri: process.env.NODE_ENV === 'production' ? process.env.KINDE_REDIRECT_URI_PROD : process.env.KINDE_REDIRECT_URI,
//   });
//   return NextResponse.redirect(loginUrl);
// }
