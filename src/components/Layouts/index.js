import Head from 'next/head';
import Navbar from '../Navbar';

const Layouts = (props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Weaboo Zone</title>
      </Head>

      <Navbar />
      <>{children}</>
    </>
  );
};

export default Layouts;
