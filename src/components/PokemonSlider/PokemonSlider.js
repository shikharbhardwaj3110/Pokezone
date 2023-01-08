import React from 'react'
import { motion } from "framer-motion"
import { GiHealthNormal, GiPiercingSword, GiPointySword, GiSlashedShield, GiSprint } from "react-icons/gi";
import { BsShieldShaded } from "react-icons/bs";

const typeStyle = {
    fontFamily: 'Montserrat, sans-serif',
    opacity: '0.8',
    color: '#fdfdfd',
    fontSize: '1.8rem'
}

const nameStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 900,
    color: 'white',
    fontSize: '4rem',
    overflowWrap: 'break-word',
    textTransform: 'capitalize'
}

const basicStatKeyStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600
}

const basicStatValue = {
    fontSize: '1.4rem',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat, sans-serif',
}

const allStatValue = {
    fontSize: '1.8rem',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat, sans-serif',
}

const icons = {
    hp : {
        icon : <GiHealthNormal size={50}/>,
        name : 'HP'
    },
    attack : {
        icon : <GiPiercingSword size={50}/>,
        name : 'Attack'
    },
    defense : {
        icon : <BsShieldShaded size={50}/>,
        name : 'Defense'
    },
    'special-attack' : {
        icon : <GiPointySword size={50}/>,
        name : 'Special Attack'
    },
    'special-defense' : {
        icon : <GiSlashedShield size={50}/>,
        name : 'Special Defense'
    },
    speed : {
        icon : <GiSprint size={50}/>,
        name : 'Speed'
    }
}


const PokemonSlider = ({ id, type, name, basics, stats }) => {

    return (

        <div className='container mt-5 pokemon-slider-container pb-5'>
            <div className='text-center row'>
                <div className='col-lg-6 col-md-6 text-start pokemon-img-container'>
                    <motion.div animate={{ y: 0 }} initial={{ y: 50 }} transition={{ duration: 0.5 }}>
                        <img src={require(`../../assets/pokemon/${id}.png`)} className='img-fluid px-md-0 px-lg-0 px-4 pokemon-img' width="500"></img>
                    </motion.div>
                </div>
                <div className='col-lg-6 col-md-6 mt-lg-0 mt-md-0 mt-4 ps-md-0 ps-lg-0 pt-4 basics-head-container'>

                    <motion.div animate={{ y: 0 }} initial={{ y: 50 }} transition={{ duration: 0.5 }}>

                        <div className='d-flex' style={{ height: '2rem' }}>
                            <img src={require(`../../assets/icons/${type}.svg`)} className='h-100'></img>
                            <h3 style={typeStyle} className='ms-3 pokemon-type'>{type.toUpperCase()}</h3>
                        </div>

                        <div className='text-start'>
                            <span style={nameStyle} className='pokemon-name'>{name}</span>
                        </div>

                        <div className='mt-5 ps-md-2 ps-0 text-start text-light'>
                            <h3 style={basicStatKeyStyle}>BASIC STATS</h3>
                        </div>

                        <div className='mt-2 rounded basics-container text-light border p-3'>

                            <div className='d-flex justify-content-between py-1'>
                                <h4 style={basicStatKeyStyle}>Height</h4>
                                <span style={basicStatValue}>{basics.height}M</span>
                            </div>

                            <div className='d-flex justify-content-between py-1'>
                                <h4 style={basicStatKeyStyle}>Weight</h4>
                                <span style={basicStatValue}>{basics.weight}KG</span>
                            </div>

                            <div className='d-flex justify-content-between py-1'>
                                <h4 style={basicStatKeyStyle}>Ability</h4>
                                <span style={basicStatValue}>{basics.ability}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div animate={{ y: 0 }} initial={{ y: 50 }} transition={{ duration: 0.75 }}>
                <div className='mt-5'>
                    <h3 style={basicStatKeyStyle} className='text-light'>ALL STATS</h3>
                    <div className='mt-4 rounded basics-container text-light p-3'>
                        <div className='row pt-lg-2 pt-4'>
                            {
                                stats.map((stat => {
                                    return (
                                        <>
                                            <div className={`col-lg-2 col-md-4 col-6 text-center mb-lg-0 mb-4`}>
                                                <div className=''>
                                                    {icons[stat.stat.name].icon}                                                   
                                                    <p className='mt-2' style={basicStatKeyStyle}>{icons[stat.stat.name].name}</p>
                                                </div>
                                                <div className='mt-3'>
                                                    <span style={allStatValue}>{stat.base_stat}</span>                            
                                                </div>
                                            </div>
                                        </>
                                    )
                                }))
                            }
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>


    )
}

export default PokemonSlider