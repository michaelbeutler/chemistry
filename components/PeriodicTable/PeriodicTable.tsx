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
];

export interface PeriodicTableProps {}

const PeriodicTable: React.FC<PeriodicTableProps> = () => {
  return (
    <div className="grid grid-cols-18 place-content-stretch gap-1">
      {periods.map((period, periodIndex) =>
        period.map((element, elementIndex) =>
          element === 0 ? (
            <span></span>
          ) : (
            <PeriodicElement
              key={periodIndex + "-" + elementIndex}
              element={ELEMENTS[element - 1]}
            />
          )
        )
      )}
    </div>
  );
};

export default PeriodicTable;
