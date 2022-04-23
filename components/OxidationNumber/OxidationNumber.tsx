import classNames from "classnames";
import React from "react";
import { romanize } from "../../helpers/romanize";

export interface OxidationNumberProps {
  element: string;
  oxidation: number;
  numberOfAtoms?: number;
}

const OxidationNumber: React.FC<OxidationNumberProps> = ({
  element,
  oxidation,
  numberOfAtoms,
}) => {
  const isNegative = oxidation < 0;
  return (
    <div className="flex flex-col items-center py-2 px-1 transition-all">
      <span
        className={classNames(
          "text-2xl leading-none",
          isNegative ? "text-red-600" : "text-green-600"
        )}
      >
        {oxidation === 0 ? "" : isNegative ? "-" : "+"}
        {romanize(isNegative ? -oxidation : oxidation)}
      </span>
      <div className="font-bold text-4xl flex leading-none">
        {element}
        {numberOfAtoms && numberOfAtoms !== 1 && (
          <span className="text-lg self-end -mb-2">{numberOfAtoms}</span>
        )}
      </div>
    </div>
  );
};

export default OxidationNumber;
