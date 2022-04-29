import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ELEMENTS, Navbar, PeriodicTable, SearchInput } from "../components";
import { useKeyPress } from "../hooks/useKeyPress";

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "legend",
        "elements",
      ])),
    },
  };
};

const Home: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const { t } = useTranslation("common");
  const { t: tElements } = useTranslation("elements");
  const searchInput = useRef<HTMLInputElement>(null);

  useKeyPress(["⌘", "k"], () => {
    searchInput.current?.focus();
  });

  useKeyPress(["Ctrl", "k"], () => {
    searchInput.current?.focus();
  });

  return (
    <div className="w-full h-full">
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:url" content="https://chemistry.iperka.com/" />
        <meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar fluid>
          <SearchInput
            defaultValue={query}
            onKeyUp={(e) => setQuery(e.currentTarget.value)}
            ref={searchInput}
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
        </Navbar>
      </main>
    </div>
  );
};

export default Home;
