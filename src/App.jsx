import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
function App() {
  const [allContacts, setAllContacts] = useState ([...contacts]);

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table className="tabla">
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>
          {allContacts.map(c => (<tr>
            <td><img style={{ width: 100 }} src={c.pictureUrl} alt={c.name}></img></td>
            <td>{c.name}</td>
            <td>{c.popularity.toFixed(2)}</td>
            <td>{c.wonOscar}</td>
            <td>{c.wonEmmy}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
