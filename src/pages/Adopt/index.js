import React, { useEffect } from 'react'

export default function Adopt() {
  useEffect(() => {
    document.querySelector('#adopt').classList.add('selected')
  }, [])

  return (
    <div>
      <h1>Adoção</h1>
    </div>
  )
}