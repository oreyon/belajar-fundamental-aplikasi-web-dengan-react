import { useState, type ChangeEvent } from "react";
import MoviesList from "../../components/views/CustomHookView/MoviesList";
import MoviesGrid from "../../components/views/CustomHookView/MoviesGrid";

const CustomHookAppPage = () => {
 const [mode, setMode] = useState('list');

  const modeChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setMode(event.target.value);
  };

  return (
    <main>
      <select aria-label={"select-view-mode"} onChange={modeChangeHandler} className={"border border-gray-300 rounded p-2 mb-4"}>
        <option value="list">List Mode</option>
        <option value="grid">Grid Mode</option>
      </select>

      {mode === 'list' ? <MoviesList /> : <MoviesGrid />}
    </main>
  );
}
export default CustomHookAppPage