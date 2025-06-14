
/**
 * @todo
 * Selesaikan komponen AnimalFactCard hingga:
 *   1. Menampilkan fakta tentang hewan dari RESTful API
 *      menggunakan fungsi getRandomAnimalFact
 *      berdasarkan props animal.
 *
 *  2. Mengubah UI yang menampikan fact menjadi input dan
 *     menyinkronisasi document.title dengan nilai state fact.
 */

import { useEffect, useState, type ChangeEvent } from "react";
import Row from "./Row";
import { getRandomAnimalFact } from "../../../libs/api/animal.service";

interface PropTypes {
  animal: 'cat' | 'dog';
}

const AnimalFactCard = (props: PropTypes) => {
  const { animal } = props;
  const [image, setImage] = useState<string | null>(null);
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnimalFact() {
      getRandomAnimalFact({ animal})
      .then(({ fact, image}) => {
        setFact(fact);
        setImage(image);
      });
    }

    fetchAnimalFact();

    return () => {
      setImage(null);
      setFact(null);
    }
  },[animal])

  useEffect(() => {
    if (fact === null) {
      document.title = "Loading fact ...";
    } else {
      document.title = fact;
    }
  },[fact])

  const handleFactChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFact(event.target.value);
  }

  return (
    <section>
      <Row label="Image">
        {image === null ? (
          <img src="https://via.placeholder.com/600x400" alt="placeholder" />
        ) : (
          <img src={image} alt={`${fact}`} />
        )}
      </Row>
      <Row label="Fact">{fact === null ? <p>Loading fact ...</p> : <textarea aria-label={"change-fact"} value={fact} onChange={handleFactChange}/>}</Row>
    </section>
  );
}
export default AnimalFactCard