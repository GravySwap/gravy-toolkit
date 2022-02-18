import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
  fontColor: string;
}

const Logo: React.FC<LogoProps> = ({ isDark, fontColor, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <svg
      width={186}
      height={37}
      viewBox="0 0 186 37"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="a" d="M0 .043h39.203v18.915H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(.753 16.042)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <g />
          <path
            d="M19.54 7.438c8.887 0 16.488-3.063 19.523-7.395.096.669.14 1.355.14 2.05 0 9.316-8.773 16.865-19.602 16.865C8.773 18.958 0 11.41 0 2.093 0 1.458.044.833.122.214 3.245 4.452 10.758 7.437 19.54 7.437"
            fill="#E2534D"
            mask="url(#b)"
          />
        </g>
        <path
          d="M19.811 23.333c8.177 0 15.265-2.592 18.743-6.377.009-.207.017-.406.017-.613C38.563 7.538 30.263.73 20.022.73c-11.18 0-18.54 6.81-18.54 15.613 0 .363.017.726.044 1.08 3.618 3.525 10.451 5.91 18.286 5.91"
          fill="#FAEBC1"
        />
        <path
          d="M4.06 8.604C5.415 5.568 9.627-.329 20.969.014c12.566.37 16.535 8.872 16.865 10.729.26 1.452-4.386-1.725-5.819.897-1.441 2.623.817 3.802-.147 5.642-.452.862-2.102 1.073-3.031-.414-.669-1.065.304-1.787-.408-2.922-.522-.836-1.72-1.734-3.005-1.866-2.206-.22-4.264 2.051-3.821 4.498.443 2.446-.27 5.614-2.666 5.271-2.397-.343-1.876-2.966-.982-5.984.825-2.781-3.456-6.266-6.183-5.835-3.144.501-2.545 3.582-5.028 4.119-2.223.475-3.874-2.878-2.684-5.545"
          fill="#DA822C"
        />
        <text
          fontFamily="Nunito-Black, Nunito"
          fontSize={25}
          fontWeight={800}
          letterSpacing={-0.694}
          fill={fontColor ?? '#441F95'}
        >
          <tspan x={51} y={26}>
            GravySwap
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
