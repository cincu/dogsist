import "../styles/globals.css";
import styled from "styled-components";
import Image from "next/image";
import Saga from "../../public/sagacitas.png";
import MainNavigation from "../../Components/MainNavigation/MainNavigation";
import Footer from "../../Components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="main">
      <Image src={Saga} width={200} alt="sagacitas" />
      <MainNavigation />
      <Component {...pageProps} name="SoKö" />
      <Footer currentYear="2023" />
    </div>
  );
}
