import React, { ReactChild, useState } from "react";

export interface TooltipProps {
  children: ReactChild;
  tooltip: ReactChild;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div
      className="relative flex flex-col items-center gap-2"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      {isShow && (
        <div className="relative mx-2">
          <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full w-52">
            {tooltip}
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
