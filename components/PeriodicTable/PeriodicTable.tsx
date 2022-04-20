import React from "react";
import { PeriodicElement, ELEMENTS } from "../";

const periods = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
  [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  [
    87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
    117, 118,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
  [0, 0, 0, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0],
];

export interface PeriodicTableProps {
  highlightedElements?: number[];
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({
  highlightedElements = [],
}) => {
  return (
    <div className="grid grid-cols-18 place-content-stretch gap-1 min-w-max">
      {periods.map((period, periodIndex) =>
        period.map((element, elementIndex) =>
          element === 0 ? (
            <span
              className="h-12"
              key={periodIndex + "-" + elementIndex}
            ></span>
          ) : (
            <PeriodicElement
              key={periodIndex + "-" + elementIndex}
              element={ELEMENTS[element - 1]}
              reduce={
                highlightedElements.length > 0 &&
                !highlightedElements.includes(element)
              }
            />
          )
        )
      )}
    </div>
  );
};

export default PeriodicTable;
