//
import { useEffect, useState } from "react";

function GetStarships() {
  const [ships, setShips] = useState(null);

  const url = `https://swapi.py4e.com/api/starships/9/`;
  //console.log(url);
  const getOneShip = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setShips(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getOneShip(url);
  }, []);

  return (
    <div>
      this is start ships component
      {name}
    </div>
  );
}
export default GetStarships;

// onst getOnePokemon = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setPokemon(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
