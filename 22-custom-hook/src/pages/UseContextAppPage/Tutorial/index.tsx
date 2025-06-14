import { useContext } from "react";
import Posts from "../../../components/views/UseContextView/Posts";
import LocaleContext from "../../../contexts/LocaleContext";

const TutorialPage = () => {
  const { locale } = useContext(LocaleContext);
    return (
    <>
      <h1>Tutorial</h1>
      <Posts locale={locale} />
    </>
  );
}

export default TutorialPage;