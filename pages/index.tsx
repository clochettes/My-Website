import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import HomeP from "../components/Home";

export default function Home() {
  return (
    <div className="p-6 h-fill bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Head>
        <title>Cl</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />

      <HomeP />
    </div>
  );
}
