"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
      try {
        const { isAuthenticated, getUser } = getKindeServerSession();
        if (!(await isAuthenticated())) {
          router.push('/signup');
        } else {
          const user = await getUser();
          setUser(user);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        router.push('/signup');
      }
    };
    checkAuth();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Welcome, {user.email}</h1>
      <p>This is your dashboard.</p>
    </>
  );
};

export default Home;
