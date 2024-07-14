import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import Navbar from '../Component pages/Navbar'
import    '../Component pages/HeroSection'
import HeroSection from '../Component pages/HeroSection';
 import lowHero from '../Component pages/lowHero';
import LowHero from '../Component pages/lowHero';

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/api/auth/login?post_login_redirect_url=https://localhost:3000/");
  }

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/verify-email?post_verify_email_redirect_url=https://localhost:3000/");
  }

  return (
    <>

      
      <HeroSection/>
      <LowHero/>
      
      
    </>
  );
}
