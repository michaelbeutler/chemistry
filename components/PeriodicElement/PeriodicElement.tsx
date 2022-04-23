import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "../../helpers/elements";

const getColor = (element: Element, reduce?: boolean): string | undefined => {
  if (reduce) {
    return "bg-gray-200 text-black";
  }

  if (element.type === "Lanthanide") {
    return "bg-orange-200 hover:bg-orange-300";
  }
  if (element.type === "Actinide") {
    return "bg-lime-200 hover:bg-lime-300";
  }

  if (element.metalloid) {
    return "bg-green-200 hover:bg-green-300";
  }

  if (element.nonmetal) {
    return "bg-yellow-200 hover:bg-yellow-300";
  }

  if (element.metal) {
    return "bg-blue-200 hover:bg-blue-300";
  }
};

export interface PeriodicElementProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
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
  className,
}) => {
  const { t } = useTranslation("elements");
  const r = (v: number | undefined) => (v ? Math.round(v * 100) / 100 : "-");

  return (
    <div
      className={classnames(
        "mx-1 md:mx-0 px-1 md:px-2 py-2 md:py-3 flex flex-col items-center w-full rounded-md transition-all duration-500",
        getColor(element, reduce),
        className
      )}
      onClick={() => copyTextToClipboard(t(element.symbol))}
    >
      <div className="w-full flex justify-between">
        <span className="text-xxs truncate w-full text-left font-semibold">
          {element.atomicNumber}
        </span>
        <span className="text-xxs truncate w-full text-right">
          {r(element.atomicMass)}
        </span>
      </div>
      <span
        className={classnames(
          "text-xs md:text-xl font-bold truncate w-full text-center",
          !reduce && element.phase === "gas" && "text-red-500",
          !reduce && element.phase === "liq" && "text-blue-500"
        )}
      >
        {element.symbol}
        {element.radioactive && "*"}
      </span>
      <small className="truncate w-full text-center text-xxs">
        {t(element.symbol)}
      </small>
      <div className="w-full flex justify-between">
        <span className="text-xxs truncate w-full text-left">
          {r(element.meltingPoint)}
        </span>
        <span className="text-xxs truncate w-full text-right">
          {r(element.density)}
        </span>
      </div>
      <div className="w-full flex justify-between">
        <span className="text-xxs truncate w-full text-left">
          {r(element.boilingPoint)}
        </span>
        <span className="text-xxs truncate w-full text-right">
          {r(element.electroNegativity)}
        </span>
      </div>
    </div>
  );
};

export default PeriodicElement;
