import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
      <h1>404 Page not found</h1>
      <Link to='/home'>Ir para Home</Link>
    </div>
  )
}