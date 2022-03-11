import type { NextPage } from "next";
import Head from "../components/Head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import ToDoCard from "../components/ToDoCard";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Mint's ToDoApp</h1>
        <ToDoCard />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
