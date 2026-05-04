import Card from "./Card";

const CardList = ({ kittens }) => {
  return (
    <div>
      {kittens.map((kitten) => {
        // console.log(`index: ${i}, kitten: ${JSON.stringify(kitten)}`);
        return (
          <Card
            id={kitten.id}
            email={kitten.email}
            name={kitten.name}
            key={kitten.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
