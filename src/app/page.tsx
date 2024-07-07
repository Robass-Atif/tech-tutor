// src/app/page.tsx

"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

type User = {
  email: string | null;
  // Add any other user properties you may need
};

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { isAuthenticated, getUser } = getKindeServerSession();

      if (!(await isAuthenticated())) {
        router.push(
          '/api/auth/verify-email?post_verify_email_redirect_url=https://techtutors.vercel.app/'
        );
        return;
      }

      const user = await getUser();
      if (!user) {
        router.push(
          '/api/auth/verify-email?post_verify_email_redirect_url=https://techtutors.vercel.app/'
        );
        return;
      }

      setUser(user as User);
    };

    checkAuth();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Welcome, {user.email}</h1>
    </>
  );
};

export default Home;
