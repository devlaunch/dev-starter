import React from "react";
import AlgoliaLogo from "../../image/algolia.svg";
import { FooterWrapper } from "./algoliaComponent.style";

const Footer = () => (
  <FooterWrapper className="dlAlgoliaFooter">
    <span>Powred by</span>
    <div className="dlLogoWrapper">
      <img alt="#" src={process.env.PUBLIC_URL + AlgoliaLogo} />
    </div>
  </FooterWrapper>
);

export default Footer;
