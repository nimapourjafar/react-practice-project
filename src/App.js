import './App.css';
import { useState } from "react";
import RecipeTile from "./RecipeTile"
import axios from 'axios'

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "4a46df72"
  const APP_KEY ="f88a7be62d10c8f415e773b413449456"
  const url= `https://api.edamam.com/search?q=${query}=${APP_ID}&app_key=${APP_KEY}`

  const getRecipes = async ()=>{
    const res = await axios.get(url);
    setRecipes(res.data.hits)
    console.log(res)
  }
  const onSubmit = (e) => {
    getRecipes();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Hello</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>
      <div className="app__recipes">
        {recipes !==[] && recipes.map((recipe)=>{
          return <RecipeTile recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
