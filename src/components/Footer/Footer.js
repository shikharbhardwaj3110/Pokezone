import React from 'react'
import PokeApi from '../../assets/pokeapi.png'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const footerStyle = {
    backgroundColor: '#80808080',
    borderTop: '4px solid #ffffff80',
}

const textStyle = {
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '1.2rem',
    marginTop: '3px'
}

const customAnchor = {
    textDecoration : 'none',
    color : 'white'
}

const Footer = () => {
    return (
        <div className='text-light mt-5 pt-3 pb-3' style={footerStyle}>
            <div className='d-flex justify-content-center align-items-center'>
                <span style={textStyle}>Made with</span>
                <a href="https://pokeapi.co/">
                    <img src={PokeApi} width='80' className='ms-2'></img>
                </a>
            </div>

            <div className='mt-3 text-center'>
                <a href='https://github.com/shikharbhardwaj3110' style={customAnchor}>
                    <AiFillGithub size={30} />
                </a>
                <a href='https://www.linkedin.com/in/shikhar-bhardwaj-8080ba180/' style={customAnchor}>
                    <AiFillLinkedin size={30} className='ms-3' />
                </a>

            </div>


        </div>
    )
}

export default Footer