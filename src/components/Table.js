import React, { useState } from 'react';
import './Table.css';

const employees = [
  { id: 101, name: 'John',destination: "PA" },
  { id: 102, name: 'Tom', destination: "P" },
  { id: 103, name: 'Kevin', destination: "A" },
  { id: 104, name: 'Hellen', destination: "SA" },
  { id: 105, name: 'Antony', destination: "M" },
 ];

function App() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(employees);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = employees.filter((employee) => {
        return employee.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(employees);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((employee) => (
            <li key={employee.id} className="user">
              <span className="user-id">{employee.id}</span>
              <span className="user-name">{employee.name}</span>
              <span className="user-age">{employee.destination}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;