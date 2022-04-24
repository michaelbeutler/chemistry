import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { OxidationEquation } from "../components";
import { Element, getElementBySymbol } from "../helpers/elements";

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "legend",
        "elements",
        "oxidation",
      ])),
    },
  };
};

const evaluateOxidationEquation = (query: string) => {
  const elements: ({ element: Element; numberOfAtoms: number } | undefined)[] =
    query
      .split(",")
      .map((e) => e.trim())
      .map((e) => {
        const symbol = e.replace(/[^a-z]/gi, "");
        const numberOfAtoms = e.replace(/[^0-9]/gi, "");
        const element = getElementBySymbol(symbol);

        if (!element) {
          return undefined;
        }

        return {
          element,
          numberOfAtoms: numberOfAtoms ? parseInt(numberOfAtoms) : 1,
          oxidation: 0,
        };
      });
  return elements.filter((e) => !!e) as {
    element: Element;
    numberOfAtoms: number;
    oxidation: number;
  }[];
};

const Home: NextPage = () => {
  const { t } = useTranslation("oxidation");
  const [query, setQuery] = useState<string>("H2,O");

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
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-20 py-5 md:py-20">
          <article className="prose">
            <h1>{t("headerRules")}</h1>
            <ol className="list-decimal">
              <li>{t("rule1")}</li>
              <li>{t("rule2")}</li>
              <li>{t("rule3")}</li>
              <li>{t("rule4")}</li>
              <li>{t("rule5")}</li>
              <li>
                {t("rule6")}
                <ul>
                  <li>{t("rule6exception1")}</li>
                  <li>{t("rule6exception2")}</li>
                </ul>
              </li>
              <li>{t("rule7")}</li>
            </ol>
          </article>

          <article className="prose">
            <h1>{t("headerExample")}</h1>
            <input
              type="text"
              defaultValue={query}
              onKeyDown={(e) => setQuery(e.currentTarget.value)}
              onChange={(e) => setQuery(e.currentTarget.value)}
            />
            <OxidationEquation equation={evaluateOxidationEquation(query)} />
          </article>
        </div>
      </main>
    </div>
  );
};

export default Home;
