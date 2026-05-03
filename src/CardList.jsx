import Card from "./Card";

const CardList = ({ kittens }) => {
  const cardComponent = kittens.map((kitten, i) => {
    console.log(kitten);
    return (
      <Card id={i} email={kitten.email} name={kitten.name} key={kitten.id} />
    );
  });

  return <div>{cardComponent}</div>;
};

export default CardList;
