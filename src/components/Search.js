import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const Search = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const [searchPokemons, setSearchPokemons] = useState('');

    const [text, setText] = useState('');


    const getPokemons = () => {
        axios.get(url + text).then(res => {
            console.log(url + text);
            
            setSearchPokemons({
                name: res.data.forms[0].name,
                url: url + res.data.id,
            });
        })
    }

    
    const onSubmit = (e) => {
        
        e.preventDefault();

        axios.get(url + text).then(res => {
            
            setSearchPokemons({
                name: res.data.forms[0].name,
                url: url + res.data.id,
            });
        })
        
    }

    // useEffect(() => {
        
    // }, [searchPokemons])
    
    return (
        <>
        <div className='d-flex justify-content-center mt-5'>
            <form id = 'search-form' className='d-flex align-items-center' onSubmit = {onSubmit}>
                <input value = {text} onChange = {(e) => setText(e.target.value)}  type='text' className='search form-control w-50' style= {{minWidth: '275px'}} id='search' placeholder='search your pokemon' />
                <input type="submit" id='submit' className='btn btn-primary' />
            </form>

        </div>

        <div className="d-flex justify-content-center mt-5" id='search-results'>
            {searchPokemons && < Pokemon pokemon = {searchPokemons} / >}
        </div>
        
        </>
    )
}

export default Search
