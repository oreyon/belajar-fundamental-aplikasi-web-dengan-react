import { useContext } from "react";
import { community } from "../../../utils/dataContext";
import LocaleContext from "../../../contexts/LocaleContext";

const CommunityPage = () => {
  const { locale } = useContext(LocaleContext);

 return (
    <>
      <h1>{community[locale].header}</h1>
      <span className="subheader">{community[locale].subheader}</span>
      <p>{community[locale].paragraph}</p>
    </>
  );
}
export default CommunityPage