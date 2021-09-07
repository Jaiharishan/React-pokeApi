import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const typeColors = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#f7de3f',
    normal: '#a4acaf',
    pyschic: '#f366b9',
    steel: '#9eb7b',
    dark: '#707070',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    grass: '#9bcc50',
    ice: '#51c4e7',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4'
}


const MyVerticallyCenteredModal = ({show, onHide, fullscreen, pokemon}) => {
    return (
      <Modal
        show = {show}
        onHide = {onHide}
        fullscreen = {fullscreen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>

            <Modal.Title id="contained-modal-title-vcenter" style = {{textTransform: 'capitalize'}} >
                pokeGlobe - {pokemon.name}
            </Modal.Title>

        </Modal.Header>


        <Modal.Body className = 'd-flex align-items-center flex-column'>

            {pokemon && <img className='w-25' src={pokemon.sprites.front_default} alt="pokemonImg" />}

            <div className="display-6">{pokemon.name}</div>


            <div className='types'>
                    {pokemon && pokemon.types.map(t => (

                        <div key={t.type.name} className="type" style={{background : typeColors[t.type.name]}}>{t.type.name}</div>
                    ))}
            </div>

            

            <div className="infos d-flex align-items-center justify-content-between mt-5 w-75 px-sm-5">

                <div className="weight d-flex align-items-center flex-column">

                    <div className='info-header'>Weight</div>
                    
                    <p className='info-content'>{Number(pokemon.weight) / 10}kg</p>

                </div>

                <div className="weight d-flex align-items-center flex-column">

                    <div className='info-header'>Weight</div>
                    
                    <p className='info-content'>{Number(pokemon.weight) / 10}kg</p>

                </div>

            </div>


            <div className="infos d-flex align-items-center justify-content-between mt-4 w-75 px-sm-5">

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>Height</div>
                    <p className='info-content'>{Number(pokemon.height) / 10}m</p>
                </div>

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>HitPoints</div>
                    <p className='info-content'>{pokemon && pokemon.stats[0].base_stat}</p>
                </div>

            </div>


            <div className="infos d-flex align-items-center justify-content-between mt-4 w-75 px-sm-5">

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>Attack</div>
                    <p className='info-content'>{pokemon && pokemon.stats[1].base_stat}</p>
                </div>

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>Defence</div>
                    <p className='info-content'>{pokemon && pokemon.stats[2].base_stat}</p>
                </div>
                
            </div>


            <div className="infos d-flex align-items-center justify-content-between mt-4 w-75 px-sm-5">

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>Speed</div>
                    <p className='info-content'>{pokemon && pokemon.stats[5].base_stat}</p>
                </div>

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>Experience</div>
                    <p className='info-content'>{pokemon && pokemon.base_experience}</p>
                </div>

            </div>


            <div className="infos d-flex align-items-center justify-content-between mt-4 w-75 px-sm-5">

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>S-Attack</div>
                    <p className='info-content'>{pokemon && pokemon.stats[3].base_stat}</p>
                </div>

                <div className="height d-flex align-items-center flex-column">
                    <div className='info-header'>S-Defence</div>
                    <p className='info-content'>{pokemon && pokemon.stats[4].base_stat}</p>
                </div>

            </div>
        </Modal.Body>



        <Modal.Footer>
          <Button  onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
  


const Pokemon = ({key, pokemon}) => {

    const [ourPokemon, setOurPokemon] = useState('');


    const [modalShow, setModalShow] = useState(false);


    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setModalShow(true);
      }



    const getPokemon = () => {
        axios.get(pokemon.url).then(res => {
            console.log(res.data);
            setOurPokemon(res.data);
        })
    }


    useEffect(() => {
        getPokemon();
    }, [])


    let v = 'sm-down';
    return (
        <>
            <div className="pokemon" variant="primary" onClick={() => handleShow(v)}>


                {ourPokemon && <img src={ourPokemon.sprites.front_default} alt="pokemonImg" />}

                <div className="name">{ourPokemon.name}</div>

                

                <div className='types'>
                    {ourPokemon && ourPokemon.types.map(t => (

                        <div key={t.type.name} className="type" style={{background : typeColors[t.type.name]}}>{t.type.name}</div>
                    ))}
                </div>

            </div>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} fullscreen={fullscreen} pokemon = {ourPokemon} />

            
        </>
    )
}

export default Pokemon
