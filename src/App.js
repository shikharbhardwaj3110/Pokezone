import { useState, useEffect } from 'react';
import './App.css';
import PokemonSlider from './components/PokemonSlider/PokemonSlider';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

const styles = {
  fire: '#ff7402',
  grass: '#33a165',
  steel: '#00858a',
  water: '#0050ac',
  psychic: '#c90086',
  ground: '#c90086',
  ice: '#70deff',
  flying: '#5d4e75',
  ghost: '#4d5b64',
  normal: '#753845',
  poison: '#7e0058',
  rock: '#6e1a00',
  fighting: '#634136',
  dark: '#272625',
  bug: '#6e1a00',
  dragon: '#00c431',
  electric: '#bba909',
  fairy: '#d31c81',
  unknow: '#757575',
  shadow: '#29292c'
}

function App() {

  const [pokemonType, setPokemonType] = useState('')

  const [pokemonId, setPokemonId] = useState(1)

  const [name, setName] = useState(undefined)

  const [basics, setBasics] = useState({})

  const [stats, setStats] = useState([])

  const [type, setType] = useState('grass')

  const appStyle = {
    background: `linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%), ${styles[type]}`,
    backgroundBlendMode: `soft-light, normal`,
    minHeight: '100vh',
    width: '100%',
    transition: 'all 0.5s ease-in-out',
  }

  const [loading, setLoading] = useState(true)

  const getPokemon = async () => {
    setLoading(true)
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    setType(res.data.types[0].type.name)
    setPokemonType(res.data.types[0].type.name)
    setStats(res.data.stats)
    setName(res.data.name)

    setBasics({
      height: res.data.height,
      weight: res.data.weight,
      ability: res.data.abilities[0].ability.name
    })

    setStats(res.data.stats)

    setLoading(false)
    console.log(res)
  }

  const randomize = () => {
    setPokemonId(Math.floor(Math.random() * (898 - 1 + 1) + 1))
  }

  useEffect(() => {
    getPokemon()
  }, [pokemonId])

  if (!loading) {
    return (
      <div style={appStyle}>
        <Topbar randomize={randomize}/>
        <PokemonSlider id={pokemonId} type={pokemonType} name={name} key={pokemonId} basics={basics} stats={stats} />
        <Footer/>
      </div>
    );
  }

  return (
    <div style={appStyle}>
      <Topbar />
      <div className='text-center d-flex align-items-center justify-content-center' style={{height : '80vh'}}>
        <ClipLoader
          color="white"
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default App;
