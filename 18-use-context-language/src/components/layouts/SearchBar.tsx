import type { ChangeEvent } from "react";
import PropTypes from "prop-types";
import { LanguageConsumer } from "../../contexts/LanguageContext";


type PropTypes = {
  keyword: string;
  onKeywordChange: (keyword: string) => void;
}

const SearchBar = (props: PropTypes) => {
  const { keyword, onKeywordChange } = props;
  return (
    <LanguageConsumer>
      {({ language }) => {
        return (
          <input 
          aria-label={"search-bar"} 
          className={"search-bar"} 
          type={"text"} 
          placeholder={language === 'id' ? 'Cari kontak...' : 'Search contacts...'}
          value={keyword} 
          onChange={(event:ChangeEvent<HTMLInputElement>) => onKeywordChange(event.target.value)}
          />
        )
      }}
    </LanguageConsumer>
  )
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
}

export default SearchBar