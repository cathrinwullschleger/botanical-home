import { createGlobalStyle } from "styled-components";
import { Italiana, Mulish } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });
const mulish = Mulish({ subsets: ["latin"], weight: ["400", "500"] });
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
   margin: 0;
  padding: 0;
    font-family: ${mulish.style.fontFamily};
    font-weight: 400;
  }


  h1, h2 {
    font-family: ${italiana.style.fontFamily};
    font-weight: 400;
    margin: 0;
    margin-top:1rem;
    font-size: 1.4rem;
    line-height: 1.2;
      text-align: center;
  }

  
h3 {
  font-family: ${mulish.style.fontFamily};
    font-weight: 400;
    font-size: 1.2rem;
    
}
  button {
    font-family: ${mulish.style.fontFamily};
    font-weight: 400;
  }

`;
