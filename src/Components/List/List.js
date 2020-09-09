import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import axios from "axios";

function List(props) {
  const [items, setItems] = useState([]);

  async function fechtData() {
    const getItem = await axios.get(
      "https://api.mercadolibre.com/sites/MLA/search?q=auriculares&limit=5"
    );
    console.log(getItem.data.results);
    setItems(getItem.data.results);
  }

  useEffect(() => {
    fechtData();
  }, []); // los corchetes quiere decir  que se ejecuta al momento de montar el componente

  return (
    <div>
      {items
        .filter((item) => {
          return item.title.toLowerCase().includes(props.searchParam.toLowerCase());
        })
        .map((item, key) => {
          return (
            <Item
              title={item.title}
              img={item.thumbnail}
              key={item.id ? item.id : key}
            />
          );
        })}

      {/* {items.map((item, key) => {
        return <Item item={item} key={item.id ? item.id : key} />;
      })} */}
    </div>
  );
}
export default List;
