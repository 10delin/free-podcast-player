import { AppRoutes } from "../../routes";
import { ChangeLanguage } from "../ChangeLanguage/ChangeLanguage";
import { MediaPlayerBar } from "../MediaPlayerBar/MediaPlayerBar.jsx";

export const App = () => {
  return (
    <>
      <ChangeLanguage />
      <AppRoutes />
      <MediaPlayerBar />
    </>
  );
};
