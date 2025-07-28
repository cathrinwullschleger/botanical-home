import { createGlobalStyle } from "styled-components";
import { Italiana, Mulish } from "next/font/google";

export const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-h",
});
export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-family-body",
});
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
:root {
  --color-light-dark: #282626;
  --color-natural-white: #F5F5F5;
--color-shadow-black-rgba: rgba(0, 0, 0, 0.1);
  --color-light-grey: #808080;
  --color-background-white: #FAFAFA;
 
}
  body {
   margin: 0;
  padding: 0;
    font-family: var(--font-family-body)  !important;;
    color: var(--color-light-dark);
    font-weight: 400;
  }


  h1, h2 {
    font-family: var(--font-family-h);
    color: var(--color-light-dark);
    font-weight: 400;
    margin: 0;
    margin-top:2rem;
    font-size: 1.4rem;
    line-height: 1.2;
      text-align: center;
  }


h3 {
  font-family: var(--font-family-body);
    font-weight: 400;
    font-size: 1.2rem;
    
}
  button {
    font-family: var(--font-family-body);
    font-weight: 400;
  }

`;
