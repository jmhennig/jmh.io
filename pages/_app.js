import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
  body{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif !important;
    background-color: #222;
  };
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}

