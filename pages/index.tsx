import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import ToDoCard from "../components/ToDoCard";
import NextHead from "../components/Head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextHead />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Mint's ToDoApp</h1>
        <ToDoCard />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
