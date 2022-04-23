import classNames from "classnames";
import React from "react";
import { OxidationNumber } from "../";
import { Element } from "../../helpers/elements";
import { PeriodicElement } from "../PeriodicElement";

export interface OxidationEquationProps {
  equation: { element: Element; oxidation: number; numberOfAtoms?: number }[];
}

const OxidationEquation: React.FC<OxidationEquationProps> = ({ equation }) => {
  if (equation.length > 1) {
    equation = equation.map((e) => {
      /**
       * The oxidation number of a Group 1 element in a compound is +1.
       * The alkali metals (group I) always have an oxidation number of +1.
       */
      if (e.element.group && e.element.group === 1) {
        return { ...e, oxidation: 1 };
      }

      /**
       * The oxidation number of a Group 2 element in a compound is +2.
       * The alkaline earth metals (group II) are always assigned an oxidation number of +2.
       */
      if (e.element.group && e.element.group === 2) {
        return { ...e, oxidation: 2 };
      }

      switch (e.element.symbol) {
        /*
         * The oxidation number of fluorine is always –1.
         * Chlorine, bromine, and iodine usually have an oxidation
         * number of –1, unless they’re in combination
         * with oxygen or fluorine.
         */
        case "F":
          return { ...e, oxidation: -1 };

        /*
         * Oxygen almost always has an oxidation number of -2, except in:
         * - peroxides (e.g. H2O2) where it is -1
         * - compounds with fluorine (e.g. OF2) where it is +2
         */
        case "O":
          if (equation.findIndex((e) => e.element.symbol === "F") !== -1) {
            return { ...e, oxidation: 2 };
          }
          return { ...e, oxidation: -2 };

        /*
         * The oxidation number of H is +1 when combined
         * with more electronegative elements (e.g. non-metals) it is -1
         * in when combined with less electronegative elements (e.g. metals).
         */
        case "H":
          // Check if equation includes a nonmetal element
          if (equation.findIndex((e) => e.element.nonmetal) !== -1) {
            return { ...e, oxidation: -1 };
          }
          return { ...e, oxidation: 1 };

        case "Cl":
        case "Br":
        case "I":
          return { ...e, oxidation: -1 };

        default:
          return e;
      }
    });
  }

  const result = equation.reduce(
    (acc, curr) =>
      acc +
      (curr.numberOfAtoms
        ? curr.numberOfAtoms * curr.oxidation
        : curr.oxidation),
    0
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center text-4xl font-bold gap-1">
        <span>OZ(</span>
        {equation.map((e, index) => (
          <OxidationNumber
            key={index}
            element={e.element.symbol}
            oxidation={e.oxidation}
            numberOfAtoms={e.numberOfAtoms}
          />
        ))}
        <span>)</span>
        <span>=</span>
        <span
          className={classNames(
            result === 0
              ? "text-green-600"
              : result < 0
              ? "text-red-600"
              : "text-blue-600"
          )}
        >
          {result}
        </span>
      </div>
      <div className="flex gap-2">
        {equation.map((e) => (
          <PeriodicElement
            className="w-20"
            key={e.element.symbol}
            element={e.element}
          />
        ))}
      </div>
    </div>
  );
};

export default OxidationEquation;
