import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

type User = {
  email: string | null;
  // Add any other user properties you may need
};

type HomeProps = {
  user: User | null;
};

const Home = ({ user }: HomeProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/signup');
    }
  }, [user, router]);

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

export async function getServerSideProps(context: any) {
  try {
    const { isAuthenticated, getUser } = getKindeServerSession(context.req, context.res);

    if (!(await isAuthenticated())) {
      return {
        redirect: {
          destination: '/signup',
          permanent: false,
        },
      };
    }

    const user = await getUser();
    return {
      props: { user },
    };
  } catch (error) {
    console.error('Authentication check failed:', error);
    return {
      props: { user: null },
    };
  }
}

export default Home;
