import Head from "next/head";
// import Image from 'next/image'
import Image from "remix-image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Image
          alt=""
          loaderUrl="/api/image"
          src="https://images.unsplash.com/photo-1653317224643-eadf65956e57?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900"
          responsive={[
            {
              size: { width: 400 },
              maxWidth: 768,
            },
            {
              size: { width: 800 },
              maxWidth: 1024,
            },
            {
              size: { width: 1000 },
            },
          ]}
        />
      </main>
    </>
  );
}
