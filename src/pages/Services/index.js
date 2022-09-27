import React, { useEffect } from 'react'

export default function Services() {
  useEffect(() => {
    document.querySelector('#services').classList.add('selected')
  }, [])

  return (
    <div>
      <h1>Serviços</h1>
    </div>
  )
}