import React from "react";
import Spinner from "../ui/Spinner";
import ChareacterItem from './ChareacterItem'
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
   <Spinner/>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <ChareacterItem key={item.char_id} item={item}></ChareacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
