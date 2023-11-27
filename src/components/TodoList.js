// src/views/PropertyList.js
import React, { useState, useEffect } from 'react';

function TodoList({titre, description ,prix, image}) {
  const [taches, setTaches ] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
    .then(response => response.json()) 
    .then(json => setTaches(json.todos))
  }, []);

  return (
    <div>
      <h2>Liste des Todos</h2>
      <ul>
        {taches.map(tache => (
            <>
            <li key={tache.id}>
              <h3>Titre : {tache.todo}</h3>
              <p>Status : {tache.completed ? (<p>Hello</p>) :(<p>Hella</p>) }</p>
            </li>

            <hr/>
            </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
