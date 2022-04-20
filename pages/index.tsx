import type { NextPage } from "next";
import Head from "next/head";
import { Container, PeriodicTable } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-900 w-full h-full">
      <Head>
        <title>Periodic Table</title>
        <meta name="description" content="Periodic Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <div className="py-5 flex flex-col gap-4">
            <h1 className="text-3xl text-white">Periodic Table</h1>
            <PeriodicTable />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
