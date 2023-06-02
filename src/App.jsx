import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
export default function App() {
  const [allContacts, setAllContacts] = useState([...contacts]);
  const [orderBy, setOrderBy] = useState("name");

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
let sortedCelebrities = [];
  if (orderBy === "name") {
    sortedCelebrities = sortedCelebrities.sort((a, b) => a.name.localeCompare(b.name));
  } else if (orderBy === "popularity") {
    sortedCelebrities = sortedCelebrities.sort((a, b) => b.popularity - a.popularity)
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button >Add Random Contact</button>
      <button value="popularity" onClick={handleOrderChange.popularity}>Sorted by Popularity</button>
      <button value="name" onClick={handleOrderChange.name}>Sorted by Name</button>
      <table className="tabla">
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>
          {allContacts.map((c) => (
            <tr>
              <td>
                <img
                  style={{ width: 100 }}
                  src={c.pictureUrl}
                  alt={c.name}
                ></img>
              </td>
              <td>{c.name}</td>
              <td>{c.popularity.toFixed(2)}</td>
              <td>{c.wonOscar ? "🏆" : ""}</td>
              <td>{c.wonEmmy ? "⭐" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}}

