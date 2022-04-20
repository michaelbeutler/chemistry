import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, ELEMENTS, PeriodicTable, SearchInput } from "../components";

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "elements"])),
    },
  };
};

const Home: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const { t } = useTranslation("elements");

  return (
    <div className="w-full h-full">
      <Head>
        <title>Periodic Table</title>
        <meta name="description" content="Periodic Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1 className="py-5 text-3xl text-white">Periodic Table</h1>
          <SearchInput
            defaultValue={query}
            onKeyUp={(e) => setQuery(e.currentTarget.value)}
          />
          <div className="py-5 overflow-x-auto">
            <PeriodicTable
              highlightedElements={
                query.length > 1
                  ? ELEMENTS.filter(
                      (e) =>
                        t(e.symbol)
                          .toLowerCase()
                          .includes(query.toLocaleLowerCase()) ||
                        e.symbol
                          .toLowerCase()
                          .includes(query.toLocaleLowerCase())
                    ).map((e) => e.atomicNumber)
                  : []
              }
            />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
