import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "./elements";

const getColor = (element: Element, reduce?: boolean): string | undefined => {
  if (reduce) {
    return "bg-gray-200";
  }

  if (element.atomicNumber >= 104 && element.atomicNumber <= 118) {
    return "bg-gray-700 hover:bg-gray-800 text-white";
  }
  if (element.atomicNumber === 57) {
    return "bg-blue-200 hover:bg-blue-300";
  }
  if (element.atomicNumber === 85) {
    return "bg-yellow-200 hover:bg-yellow-300";
  }
  if (element.atomicNumber === 86) {
    return "bg-orange-200 hover:bg-orange-300";
  }
  if (element.atomicNumber === 87) {
    return "bg-green-200 hover:bg-green-300";
  }
  if (element.atomicNumber === 89) {
    return "bg-pink-300 hover:bg-pink-300";
  }

  if (element.atomicNumber >= 58 && element.atomicNumber <= 71) {
    return "bg-blue-700 hover:bg-blue-800 text-white";
  }

  if (element.atomicNumber >= 90 && element.atomicNumber <= 103) {
    return "bg-orange-700 hover:bg-orange-800 text-white";
  }

  switch (element.type) {
    case "Nonmetal":
    case "Halogen":
      return "bg-cyan-200 hover:bg-cyan-300";
    case "Alkali Metal":
    case "Metal":
      return "bg-green-200 hover:bg-green-300";
    case "Alkaline Earth Metal":
    case "Actinide":
      return "bg-pink-400 hover:bg-pink-500";
    case "Metalloid":
      return "bg-yellow-200 hover:bg-yellow-300";
    case "Transition Metal":
      return "bg-purple-200 hover:bg-purple-300";
    case "Noble Gas":
      return "bg-orange-200 hover:bg-orange-300";
    case "Transactinide":
      return "bg-gray-700 hover:bg-gray-800 text-white";

    default:
      break;
  }
};

export interface PeriodicElementProps {
  element: Element;
  reduce?: boolean;
}

export async function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

const PeriodicElement: React.FC<PeriodicElementProps> = ({
  element,
  reduce,
}) => {
  const { t } = useTranslation("elements");

  return (
    <div
      className={classnames(
        "mx-1 md:mx-0 px-1 md:px-2 py-2 md:py-3 flex flex-col items-center w-full rounded-md transition-all",
        getColor(element, reduce)
      )}
      onClick={() => copyTextToClipboard(element.element)}
    >
      <div className="w-full flex justify-between">
        <span className="text-xxs truncate w-full text-left">
          {element.atomicNumber}
        </span>
        <span className="hidden md:block text-xxs truncate w-full text-right">
          {element.atomicMass}
        </span>
      </div>
      <span className="text-xs md:text-xl font-bold truncate w-full text-center">
        {element.symbol}
      </span>
      <small className="truncate w-full text-center text-xxs">
        {t(element.symbol)}
      </small>
    </div>
  );
};

export default PeriodicElement;
