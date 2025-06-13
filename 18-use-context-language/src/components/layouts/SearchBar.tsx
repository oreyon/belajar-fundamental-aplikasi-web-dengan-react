import type { ChangeEvent } from "react";
import PropTypes from "prop-types";


type PropTypes = {
  keyword: string;
  onKeywordChange: (keyword: string) => void;
}

const SearchBar = (props: PropTypes) => {
  const { keyword, onKeywordChange } = props;
  return (
    <input aria-label={"search-bar"} className={"search-bar"} type={"text"} placeholder={"cari berdasarkan nama"} value={keyword} onChange={(event:ChangeEvent<HTMLInputElement>) => onKeywordChange(event.target.value)}/>
  )
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
}

export default SearchBar