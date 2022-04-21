import React from "react";
import { useTranslation } from "react-i18next";

const Legend = () => {
  const { t } = useTranslation("legend");

  return (
    <div>
      <div className="grid flex-col gap-1 text-sm md:text-base">
        <div className="flex gap-4">
          <div className="bg-blue-200 w-10"></div>
          <span>{t("metal")}</span>
        </div>
        <div className="flex gap-4">
          <div className="bg-green-200 w-10"></div>
          <span>{t("metalloid")}</span>
        </div>
        <div className="flex gap-4">
          <div className="bg-yellow-200 w-10"></div>
          <span>{t("nonmetal")}</span>
        </div>
        <div className="flex gap-4">
          <span className="font-bold text-black w-10">*</span>
          <span>{t("radioactive")}</span>
        </div>
        <div className="flex gap-4">
          <span className="font-bold text-black w-10">Li</span>
          <span>{t("solid")}</span>
        </div>
        <div className="flex gap-4">
          <span className="font-bold text-blue-500 w-10">Br</span>
          <span>{t("liquid")}</span>
        </div>
        <div className="flex gap-4">
          <span className="font-bold text-red-500 w-10">H</span>
          <span>{t("gas")}</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;
