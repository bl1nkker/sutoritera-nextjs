import Head from "next/head";
import { Navbar } from "./Navbar";
import styles from "./../styles/App.module.scss";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.app__container}>
      <Head>
        <title>New Stories</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
