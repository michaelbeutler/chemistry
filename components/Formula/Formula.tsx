import React from "react";
import MathJax from "react-mathjax";

export interface FormulaProps {
  tex: string;
}

const Formula: React.FC<FormulaProps> = ({ tex }) => {
  return (
    <MathJax.Provider>
      <MathJax.Node formula={tex} />
    </MathJax.Provider>
  );
};

export default Formula;
