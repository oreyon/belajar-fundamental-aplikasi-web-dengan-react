import React, { Fragment } from "react";
import LanguageSwitcher from "../../components/organism/LanguageSwitcher";
import RepositoriesList from "../../components/organism/RepositoriesList";

type PropTypes = object

interface StateTypes {
  language: string;
}

class ComponentLifecyclePage extends React.Component<PropTypes, StateTypes> {
  
  constructor(props:PropTypes) {
    super(props);

    this.state = {
      language: "all"
    }

    this.onLanguageChange = this.onLanguageChange.bind(this);
  }

  onLanguageChange(language:string) {
    this.setState(() => {
      return {
        language: language
      }
    })
  }

  render(): React.ReactNode {
      return (
        <Fragment>
          <LanguageSwitcher language={this.state.language} onLanguageChange={this.onLanguageChange}/>
          <RepositoriesList language={this.state.language}/>
        </Fragment>
      )
  }

}

export default ComponentLifecyclePage;