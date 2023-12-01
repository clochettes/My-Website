import Image from "next/image";
import Head from "next/head";
import Header from "../pages/components/Header";
import HomeP from "../pages/components/Home";

export default function Home() {
  return (
    <div className="p-6 h-fill bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <Head>
        <title>Clochettes.me</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      
      <HomeP />
    </div>
  );
}
