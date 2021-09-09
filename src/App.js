import { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import Pagination from "./components/Pagination.js";
import './index.css';
import Header from "./components/Header";
import Search from "./components/Search";

function App() {

  // initally pokemon is set to empty array
  const [pokemons, setPokemons] = useState([]);

  const [currentpageUrl, setCurrentpageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextpageUrl, setNextpageUrl] = useState();
  const [previouspageUrl, setPreviouspageUrl] = useState();

  // setting a loading state
  const [loading, setLoading] = useState(true);


  // the function runs if the currentpgeurl changes
  useEffect(() => {

    setLoading(true);
    let cancel;

    axios.get(currentpageUrl, {cancelToken: new axios.CancelToken(c => cancel = c)}).then(res => {

        setLoading(false)
        setPokemons(res.data.results.map(Pokemon => Pokemon));
        setNextpageUrl(res.data.next);
        setPreviouspageUrl(res.data.previous);

    })

    return () => cancel()
  }, [currentpageUrl])



  // the setPokemon is any function which has pokeon has its parameter so we can do what ever we want
  // like adding, deleting, updating, etc.


  // for next page
  let getNextpage = () => {
    setCurrentpageUrl(nextpageUrl)
  };

  // for prev page
  let getPreviouspage = () => {
    setCurrentpageUrl(previouspageUrl);
  }

  if(loading) return (
    <div className='loading'>
      loading...
    </div>
  )
  

  return (
    <div className="App">
      <Header/>

      <Search />
      
      <PokemonList pokemons = {pokemons} />

      <Pagination  nextPage = {nextpageUrl ? getNextpage : null} prevPage = {previouspageUrl ? getPreviouspage : null}/>
      
    </div>
  );
}

export default App;
