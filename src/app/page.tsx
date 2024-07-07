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
  const [loading, setLoading] = useState(true); // Add loading state
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
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
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <>
      <h1>Welcome, {user.email}</h1>
    </>
  );
};

export default Home;
