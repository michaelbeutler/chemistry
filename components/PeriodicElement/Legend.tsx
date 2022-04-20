import React from "react";
import { useTranslation } from "react-i18next";
import { ELEMENTS, PeriodicElement } from ".";

const Legend = () => {
  const { t } = useTranslation("legend");
  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        <span className="text-xxs text-right">{t("atomicNumber")}</span>
        <span className="text-xxs">{t("atomicMass")}</span>
        <span className="text-xxs text-right h-8 items-center flex justify-end">
          {t("symbol")}
        </span>
        <span className="text-xxs items-end flex justify-start">
          {t("element")}
        </span>
        <span className="text-xxs text-right">{t("meltingPoint")}</span>
        <span className="text-xxs">{t("density")}</span>
        <span className="text-xxs text-right">{t("boilingPoint")}</span>
        <span className="text-xxs">{t("electroNegativity")}</span>
        <PeriodicElement
          className="w-20 col-start-2 row-start-1 row-span-4"
          element={ELEMENTS[11]}
        />
      </div>
    </div>
  );
};

export default Legend;
