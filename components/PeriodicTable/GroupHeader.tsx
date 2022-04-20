import classNames from "classnames";
import React from "react";
import { getColumClassName, getRowClassName } from "./PeriodicTable";

export interface GroupHeaderProps {
  group: number;
  name: string;
}

const GroupHeader: React.FC<GroupHeaderProps> = ({ group, name }) => {
  let row = 1;
  if (group === 2) {
    row = 2;
  }
  if (group >= 3 && group <= 12) {
    row = 4;
  }
  if (group >= 13 && group <= 17) {
    row = 2;
  }
  if (group === 18) {
    row = 1;
  }

  return (
    <div
      className={classNames(
        "flex items-end justify-center text-2xl font-bold",
        getRowClassName(row),
        getColumClassName(group + 1)
      )}
    >
      {name}
    </div>
  );
};

export default GroupHeader;
