import { AppRoutes } from "./routes";
import { ChangeLanguage } from "./components/ChangeLanguage/ChangeLanguage";

export const App = () => {
  return (
    <>
      <ChangeLanguage />
      <AppRoutes />
    </>
  );
};
