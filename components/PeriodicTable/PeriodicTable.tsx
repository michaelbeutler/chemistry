import classNames from "classnames";
import React from "react";
import { PeriodicElement, PeriodicElementLegend, ELEMENTS } from "../";
import GroupHeader from "./GroupHeader";
import Legend from "./Legend";

export interface PeriodicTableProps {
  highlightedElements?: number[];
}

export const getRowClassName = (row: number | undefined) => {
  switch (row) {
    case 1:
      return "row-start-1";
    case 2:
      return "row-start-2";
    case 3:
      return "row-start-3";
    case 4:
      return "row-start-4";
    case 5:
      return "row-start-5";
    case 6:
      return "row-start-6";
    case 7:
      return "row-start-7";
    case 8:
      return "row-start-8";
    default:
      break;
  }
};

export const getColumClassName = (column: number | undefined) => {
  switch (column) {
    case 1:
      return "col-start-1";
    case 2:
      return "col-start-2";
    case 3:
      return "col-start-3";
    case 4:
      return "col-start-4";
    case 5:
      return "col-start-5";
    case 6:
      return "col-start-6";
    case 7:
      return "col-start-7";
    case 8:
      return "col-start-8";
    case 9:
      return "col-start-9";
    case 10:
      return "col-start-10";
    case 11:
      return "col-start-11";
    case 12:
      return "col-start-12";
    case 13:
      return "col-start-13";
    case 14:
      return "col-start-14";
    case 15:
      return "col-start-15";
    case 16:
      return "col-start-16";
    case 17:
      return "col-start-17";
    case 18:
      return "col-start-18";
    case 19:
      return "col-start-19";
    default:
      break;
  }
};

const PeriodicTable: React.FC<PeriodicTableProps> = ({
  highlightedElements = [],
}) => {
  return (
    <div className="grid grid-cols-18 place-content-stretch gap-1 min-w-max">
      {Array(8)
        .fill(null)
        .map((p, i) =>
          i === 0 ? (
            <span></span>
          ) : (
            <div
              className={classNames(
                "flex items-center justify-center px-2 text-2xl text-bold",
                getRowClassName(i + 1),
                getColumClassName(1)
              )}
              key={"p" + i + 1}
            >
              {i}.
            </div>
          )
        )}

      <GroupHeader group={1} name={"I"} />
      <GroupHeader group={2} name={"II"} />
      <GroupHeader group={3} name={"III"} />
      <GroupHeader group={4} name={"IV"} />
      <GroupHeader group={5} name={"V"} />
      <GroupHeader group={6} name={"VI"} />
      <GroupHeader group={7} name={"VII"} />
      <div
        className={classNames(
          "flex items-end justify-center text-2xl font-bold col-start-9 col-end-12 border-b-2 border-black",
          getRowClassName(4)
        )}
      >
        VIII
      </div>
      <GroupHeader group={11} name={"I"} />
      <GroupHeader group={12} name={"II"} />
      <GroupHeader group={13} name={"III"} />
      <GroupHeader group={14} name={"IV"} />
      <GroupHeader group={15} name={"V"} />
      <GroupHeader group={16} name={"VI"} />
      <GroupHeader group={17} name={"VII"} />
      <GroupHeader group={18} name={"VIII"} />

      <div className="col-start-5 col-end-13 row-start-2 row-end-4  flex gap-12">
        <PeriodicElementLegend />
        <Legend />
      </div>

      {ELEMENTS.filter((e) => e.group !== undefined).map((e) => (
        <PeriodicElement
          className={classNames(
            getRowClassName(e.period + 1),
            getColumClassName(e.group ? e.group + 1 : e.group),
            "w-20"
          )}
          key={e.atomicNumber}
          element={e}
          reduce={
            highlightedElements.length > 0 &&
            !highlightedElements.includes(e.atomicNumber)
          }
        />
      ))}
    </div>
  );
};

export default PeriodicTable;
