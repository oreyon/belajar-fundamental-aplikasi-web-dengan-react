import { tutorial } from "../../../utils/dataContext";

interface Props {
  locale: 'id' | 'en';
}

const Posts = (props: Props) => {
  const { locale } = props;
  return (
    <ul className="posts">
      {tutorial[locale].map((title:string) => (
        <li key={title}>
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
}
export default Posts