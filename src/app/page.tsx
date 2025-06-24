import { redirect } from 'next/navigation';
import Head from 'next/head';

export default function Home() {
   <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet" />
      </Head>
    </>
  redirect('/de'); // Redirecting to /de as default language
}
