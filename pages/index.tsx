import type { NextPage } from "next";
import styles from "../src/styles/Home.module.css";
import Footer from "../src/components/Footer";
import ToDoCard from "../src/components/TodoCard";
import NextHead from "../src/components/Head";

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
