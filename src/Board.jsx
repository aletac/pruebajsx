import Card from "./Card";

const Board = ({ data }) => {
  return (
    <div>
      {data.map(({ name, url }) => {
        return name && <Card key={name} name={name} url={url} />;
      })}
    </div>
  );
};

export default Board;
