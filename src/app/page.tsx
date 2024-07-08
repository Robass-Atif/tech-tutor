import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

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
      
      <p>hi {user.email}</p>
    </>
  );
}
