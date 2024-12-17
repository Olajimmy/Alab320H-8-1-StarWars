// //

// import { useEffect, useState } from "react";

// function GetStarships() {
//   const [ships, setShips] = useState(null);
//   const [loading, setLoading] = useState(true); // Adding loading state
//   const [error, setError] = useState(null); // Adding error state

//   const url = `https://swapi.py4e.com/api/starships/`;

//   const getOneShip = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setShips(data.results); // We need to access 'results' as that's where the ships are located
//       setLoading(false); // Data is loaded, set loading to false
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch data"); // Set error if the fetch fails
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getOneShip(url);
//   }, []);

//   if (loading) {
//     return <div>Loading Starships...</div>; // Show loading state
//   }

//   if (error) {
//     return <div>{error}</div>; // Show error message if there's an issue
//   }

//   return (
//     <div>
//       <h1>Star Wars Starships</h1>
//       {ships && ships.length > 0 ? (
//         <ul>
//           {ships.map((ship, index) => (
//             <li key={index}>
//               <h3>{ship.name}</h3>
//               <p>Model: {ship.model}</p>
//               <p>Manufacturer: {ship.manufacturer}</p>
//               <p>Cost in credits: {ship.cost_in_credits}</p>
//               <p>Length: {ship.length}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No starships available</p>
//       )}
//     </div>
//   );
// }

// export default GetStarships;

import { useEffect, useState } from "react";

function GetStarships() {
  const [ships, setShips] = useState(null);

  const url = `https://swapi.py4e.com/api/starships/`;
  //console.log(url);
  const getOneShip = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data.results);

      setShips(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getOneShip(url);
  }, []);

  return (
    <div>
      <h1>this is starWar ships component</h1>
      {ships && ships.length > 0 ? (
        <div className="mainBox">
          {ships.map((ship, index) => (
            <div key={index}>
              <div className="box">
                <h3>{ship.name}</h3>
                <p>Model: {ship.model}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Cost in credits: {ship.cost_in_credits}</p>
                <p>Length: {ship.length}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No starships available</p>
      )}
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
