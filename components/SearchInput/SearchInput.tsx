import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

export interface SearchInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const SearchInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SearchInputProps
> = ({ ...props }, ref) => {
  const { t } = useTranslation("common");

  return (
    <div className="relative flex items-center">
      <input
        type="search"
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        ref={ref}
        placeholder={t("search")}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
          ⌘K
        </kbd>
      </div>
    </div>
  );
};

export default forwardRef(SearchInput);
