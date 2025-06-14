import { Fragment, useState, type ChangeEvent } from "react";
import AnimalFactCard from "../../components/views/AnimalFactView/AnimalFactCard";


const UseEffectAppPage = () => {
    const [animal, setAnimal] = useState<'cat' | 'dog'>('cat');

  const genderChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => setAnimal(event.target.value as 'cat' | 'dog');

  return (
    <Fragment>
      <select aria-label={"select-animal"} onChange={genderChangeHandler}>
        <option value="cat">Cat Fact</option>
        <option value="dog">Dog Fact</option>
      </select>
      <AnimalFactCard animal={animal} />
    </Fragment>
  );
}

export default UseEffectAppPage