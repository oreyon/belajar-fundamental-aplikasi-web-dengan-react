import  { Fragment, type ChangeEvent } from 'react'
import PropTypes from 'prop-types'

interface PropTypes {
  language: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSwitcher = (props: PropTypes) => {
  const { language, onLanguageChange } = props;

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value);
  }

  return (
    <Fragment>
      <label htmlFor="language">Select Languange: </label>
      <select name="language" id="language" value={language} onChange={handleChangeLanguage} className={"border border-gray-300 rounded-md p-2"}>
        <option value="all">All</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Dart">Dart</option>
        <option value="Python">Python</option>
      </select>
    </Fragment>
  )
}

LanguageSwitcher.propTypes = {
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
}

export default LanguageSwitcher