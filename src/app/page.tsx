import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/api/auth/login");
  }

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  return (
    <>
    
      <p>Hi {user.email}</p>
    </>
  );
}
