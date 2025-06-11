import PropTypes from "prop-types";
import React from "react";
import RepositoryItem from "./RepositoryItem";
import { getRepositories } from "../../libs/api/repository.service";

interface PropTypes {
  language: string;
}

interface StateTypes {
  repositories: Array<{
    owner: string;
    name: string;
    description: string;
    url: string;
  }> | null;
}

class RepositoriesList extends React.Component<PropTypes, StateTypes> {
  constructor(props:PropTypes) {
    super(props);

    this.state = {
      repositories: null
    };
  }

  async componentDidMount() {
    const { language } = this.props;

    try {
      const repositories = await getRepositories(language);
      this.setState(() => {
        return {
          repositories
        };
      });
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
      this.setState(() => {
        return {
          repositories: []
        };
      });
    }
  }

  async componentDidUpdate(prevProps: PropTypes) {

    if (prevProps.language !== this.props.language) {
      const { language } = this.props;

      try {
        const repositories = await getRepositories(language);
        this.setState(() => {
          return {
            repositories
          };
        });
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
        this.setState(() => {
          return {
            repositories: []
          };
        });
      }
    }
  }

  render() {
    if (this.state.repositories === null) {
      return <p>Loading ... </p>;
    }

    return (
      <div className="repositories-list">
        {this.state.repositories.map((repository) => {
          return (
            <RepositoryItem
              key={`${repository.owner}/${repository.name}`}
              name={repository.name}
              owner={repository.owner}
              description={repository.description}
              url={repository.url}
            />
          );
        })}
      </div>
    );
  }
}

RepositoriesList.propTypes = {
  language: PropTypes.string.isRequired
};

export default RepositoriesList;