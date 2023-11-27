import React from "react";
import UserProfile from '../components/UserProfile'
import TodoList from '../components/TodoList'
import ProductList from '../components/ProductList'

function About() {
  return (
    <div>
      <h1>A propos</h1>
      <p>Bienvenue sur la page d'information de notre application!</p>
      <UserProfile/>
      <hr/>
      {/* <TodoList/> */}
      <ProductList/>
    </div>
  );
}

export default About;