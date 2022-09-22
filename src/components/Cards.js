import React from "react";
import BookCard from "./BookCard";

export default function Cards(props) {
  return props.data.data ? (
    props.data.data.map((item) => {
      return <BookCard data={item} key={item.id} />;
    })
  ) : (
    <p> no data found </p>
  );
}
