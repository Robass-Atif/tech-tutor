import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Navbar from '../Navbar';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  // Check if the user is authenticated
  if (!(await isAuthenticated())) {
    return redirect("/api/auth/verify-email?post_verify_email_redirect_url=http://localhost:3000/");
  }

  const user = await getUser();

  // Check if the user is verified
  if (!user) {
    return redirect("//api/auth/verify-email?post_verify_email_redirect_url=http://localhost:3000/");
  }
// /api/auth/verify-email?post_verify_email_redirect_url=https://techtutors.vercel.app/
  // Return the component if user is authenticated and verified
  return (
    <>
      
      hi {user.email}
    </>
  );
}
