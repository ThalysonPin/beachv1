import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowCircleLeft } from "react-icons/hi";

export default function Voltar() {
  return (
    <div className='voltar-container'>
        <Link to="/"> <HiArrowCircleLeft/> voltar</Link>
    </div>
  )
}
