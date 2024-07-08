// import { NextRequest, NextResponse } from 'next/server';
// // //import { getKindeClient } from '@kinde-oss/kinde-auth-nextjs/server';

// // export async function GET(req: NextRequest) {
// //   const client = getKindeClient({
// //     clientId: process.env.KINDE_CLIENT_ID,
// //     clientSecret: process.env.KINDE_CLIENT_SECRET,
// //     domain: process.env.KINDE_DOMAIN,
// //     redirectUri: process.env.NODE_ENV === 'production' ? process.env.KINDE_REDIRECT_URI_PROD : process.env.KINDE_REDIRECT_URI,
// //   });

//   try {
//     await client.handleCallback(req);
//     return NextResponse.redirect('/');
//   } catch (error) {
//     console.error('Error handling auth callback:', error);
//     return NextResponse.redirect('/error');
//   }
// }
