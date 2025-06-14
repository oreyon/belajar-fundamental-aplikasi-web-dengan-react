

interface inputAnimal {
  animal: string;
}
async function getRandomAnimalFact(inputAnimal: inputAnimal): Promise<{ image: string; fact: string}> {
  const response = await fetch(`https://some-random-api.com/animal/${inputAnimal.animal}`);
  if (response.status !== 200) {
    if (inputAnimal.animal === 'cat') {
      return {
        image: 'https://cdn.some-random-api.com/LmJgIq6v.png',
        fact: 'Cats can change their meow to manipulate a human. They often imitate a human baby when they need food, for example.'
      };
    }

    return {
      image: 'https://cdn.some-random-api.com/Yo9uqgdC',
      fact: `“Him” and “Her” were the names of President Lyndon Johnson's two beagles.`
    };
  }

  const { image, fact } = await response.json();
  return { image, fact };
}

export { getRandomAnimalFact };
