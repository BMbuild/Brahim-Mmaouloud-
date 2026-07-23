import React from 'react'
import ProductCard from './components/ProductCard'

const sampleEvent = {
  id: 'nyc-1',
  title: 'Movies Under the Stars: Space Jam (1996)',
  venue: 'McCarren Park — Driggs & Lorimer',
  datetime: new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString(),
  category: 'Movie',
  image: '',
}

export default function App(){
  return (
    <div className="app-root">
      <header className="app-header">Summer in the City — Live Feed (demo)</header>
      <main className="feed">
        <ProductCard {...sampleEvent} />
      </main>
    </div>
  )
}
