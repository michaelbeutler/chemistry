import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ELEMENTS, OxidationEquation } from "../components";
import { Element, getElementBySymbol } from "../helpers/elements";

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

const evaluateOxidationEquation = (query: string) => {
  const elements: ({ element: Element; numberOfAtoms: number } | undefined)[] =
    query
      .split(" ")
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
  const { t } = useTranslation("common");
  const [query, setQuery] = useState<string>("H2 O");

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
        <div className="flex flex-col px-20 py-20 gap-4">
          <article className="prose">
            <h1>Postulated rules</h1>
            <ol className="list-decimal">
              <li>
                The oxidation number of any atom in its elemental form is 0.
              </li>
              <li>
                The sum of oxidation numbers in a neutral compound is 0. The sum
                of the oxidation numbers in a monatomic ion is equal to the
                overall charge of that ion.
              </li>
              <li>
                The oxidation number of fluorine is always -1. Chlorine,
                bromine, and iodine usually have an oxidation number of -1,
                unless they are in combination with oxygen or fluorine.
              </li>
              <li>
                The oxidation number of a Group 1 element in a compound is +1.
                The alkali metals (group I) always have an oxidation number of
                +1.
              </li>
              <li>
                The oxidation number of a Group 2 element in a compound is +2.
                The alkaline earth metals (group II) are always assigned an
                oxidation number of +2.
              </li>
              <li>
                Oxygen almost always has an oxidation number of -2, except in:
                <ul>
                  <li>peroxides (e.g. H2O2) where it is -1</li>
                  <li>compounds with fluorine (e.g. OF2) where it is +2</li>
                </ul>
              </li>
              <li>
                The oxidation number of H is +1 when combined with more
                electronegative elements (e.g. non-metals) it is -1 in when
                combined with less electronegative elements (e.g. metals).
              </li>
            </ol>
          </article>

          <article className="prose">
            <h1>Example</h1>
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
