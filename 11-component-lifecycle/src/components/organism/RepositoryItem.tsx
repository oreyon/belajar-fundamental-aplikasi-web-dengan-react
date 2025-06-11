import PropTypes from "prop-types";

interface PropTypes {
  owner: string;
  name: string;
  description: string;
  url: string;
}

const RepositoryItem = (props: PropTypes) => {
  const { owner, name, description, url } = props;

  
  return (
     <div className="repository-item">
      <h3 className="repository-item__name">
        <a href={url} target="_blank" rel="noreferrer">{`${owner}/${name}`}</a>
      </h3>
      <p className="repository-item__owner">by {owner}</p>
      <p className="repository-item__description">{description}</p>
    </div>
  )
}

RepositoryItem.propTypes = {
  owner: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default RepositoryItem;