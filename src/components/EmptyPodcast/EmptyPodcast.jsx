import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { StyledBackButton } from "../../styles/StyledPodcast";
import { StyledEmptyPodcast } from "../../styles/StyledEmptyPodcast";

export const EmptyPodcast = ({ Navigate }) => {
  const { t } = useTranslation();

  return (
    <StyledEmptyPodcast>
      <p>{t("emptyPodcast.title")}</p>
      <StyledBackButton onClick={() => Navigate(`/`)} data-cy="go-to-home">
        <box-icon name="chevron-left" color="white" />
        {t("emptyPodcast.button")}
      </StyledBackButton>
    </StyledEmptyPodcast>
  );
};

EmptyPodcast.propTypes = {
  Navigate: PropTypes.func.isRequired,
};
