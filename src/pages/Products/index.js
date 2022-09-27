import React, { useEffect } from 'react'

export default function Products() {
  useEffect(() => {
    document.querySelector('#products').classList.add('selected')
  }, [])

  return (
    <div>
      <h1>Produtos</h1>
    </div>
  )
}