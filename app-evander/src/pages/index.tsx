import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Carousel } from "./components/carousel/Carousel";
import { Header } from "./components/header/Header";
import { Card } from "./components/card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useLayoutEffect, useEffect } from "react";

interface RepositoryInformation {
  link: string;
  title: string;
  description: string;
}

export default function Home() {
  const api_url = "https://api.github.com/users/EvanderJimenez/repos";
  const [repos, setRepository] = useState();
  const [Data, setData] = useState<RepositoryInformation[]>([]);

  const fetchFunction = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        setRepository(data);
        setData(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <>
      <Head>
        <title>app-evander</title>
        <meta name="description" content="This project was created by evander" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <div>
          <Carousel contexts={Data} />
        </div>
       
      </main>
      <footer>
        <Card />
        </footer>
    </>
  );
}
