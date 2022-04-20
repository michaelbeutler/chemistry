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
  const { t } = useTranslation("common");
  const { t: tElements } = useTranslation("elements");

  return (
    <div className="w-full h-full">
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:url" content="https://chemistry.iperka.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1 className="py-2 text-3xl">{t("title")}</h1>

          <SearchInput
            defaultValue={query}
            onKeyUp={(e) => setQuery(e.currentTarget.value)}
          />
          <div className="py-5 overflow-x-auto">
            <PeriodicTable
              highlightedElements={ELEMENTS.filter(
                (e) =>
                  tElements(e.symbol)
                    .toLowerCase()
                    .includes(query.toLocaleLowerCase()) ||
                  e.symbol.toLowerCase().includes(query.toLocaleLowerCase())
              ).map((e) => e.atomicNumber)}
            />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
