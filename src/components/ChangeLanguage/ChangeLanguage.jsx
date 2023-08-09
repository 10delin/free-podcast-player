import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  StyledWrapper,
  StyledContent,
  StyledImage,
} from "../../styles/StyledChangeLanguage";

import SpainIcon from "../../assets/images/spain.webp";
import UkIcon from "../../assets/images/united-kingdom.webp";

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const isSpanish = language === "es";

  return (
    <StyledWrapper>
      <StyledContent
        $isSpanish={isSpanish}
        onClick={() => setLanguage("es")}
        data-cy="es-lang"
      >
        <StyledImage src={SpainIcon} alt="Spanish" />
      </StyledContent>
      <StyledContent
        $isSpanish={!isSpanish}
        onClick={() => setLanguage("en")}
        data-cy="en-lang"
      >
        <StyledImage src={UkIcon} alt="English" />
      </StyledContent>
    </StyledWrapper>
  );
};
