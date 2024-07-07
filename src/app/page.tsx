// pages/index.tsx
import { GetServerSideProps } from 'next';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextApiRequest } from 'next';


type User = {
  email: string;
  // Add any other user properties you may need
};

type HomeProps = {
  user: User;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req as NextApiRequest;
  const { isAuthenticated, getUser } = getKindeServerSession(req);

  // Check if the user is authenticated
  if (!(await isAuthenticated())) {
    return {
      redirect: {
        destination: "/api/auth/verify-email?post_verify_email_redirect_url=https://techtutors.vercel.app/",
        permanent: false,
      },
    };
  }

  const user = await getUser();

  // Check if the user is verified
  if (!user) {
    return {
      redirect: {
        destination: "/api/auth/verify-email?post_verify_email_redirect_url=https://techtutors.vercel.app/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};

const Home = ({ user }: HomeProps) => {
  return (
    <>
      
      <h1>Welcome, {user.email}</h1>
    </>
  );
};

export default Home;
