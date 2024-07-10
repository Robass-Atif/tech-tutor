import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import Navbar from '../Component pages/Navbar'
import    '../Component pages/HeroSection'
import HeroSection from '../Component pages/HeroSection';

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/api/auth/login?post_login_redirect_url=https://techtutors.vercel.app/");
  }

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/verify-email?post_verify_email_redirect_url=https://techtutors.vercel.app/");
  }

  return (
    <>

      <Navbar />
      {/* <HeroSection/> */}
      
    </>
  );
}
