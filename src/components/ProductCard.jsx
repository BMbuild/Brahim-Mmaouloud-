import React from 'react'

function timeUntil(startIso){
  const now = new Date()
  const start = new Date(startIso)
  const diffMs = start - now
  if (diffMs <= 0) return {label: 'Now', minutes: 0}
  const minutes = Math.floor(diffMs / 60000)
  if (minutes < 60) return {label: `${minutes}m`, minutes}
  if (minutes < 60*24) return {label: `${Math.floor(minutes/60)}h`, minutes}
  return {label: `${Math.floor(minutes/60/24)}d`, minutes}
}

function urgencyColor(minutes){
  if (minutes === 0) return '#2b8a3e' // live/now green
  if (minutes <= 60) return '#e63946' // red
  if (minutes <= 60*24) return '#f4a261' // amber
  return '#2a9d8f' // coastal teal
}

const OVERRIDES = {
  'McCarren Park — Driggs & Lorimer': 'Bring a blanket; Mosquitos RSVP too.',
}

function opinionatedLine({title, venue, category}){
  if (OVERRIDES[venue]) return OVERRIDES[venue]
  const t = title.toLowerCase()
  if (category && /concert|music|summerstage|summer on the hudson/i.test(category)) return 'If it’s a concert — expect people to clap on the 2.'
  if (/space jam|movie|film|movies under the stars/i.test(t)) return 'Classic crowd-pleaser; seats are first-come.'
  return 'Insider tip: arrive 20 minutes early for best sight lines.'
}

export default function ProductCard({id, title, venue, datetime, category, image}){
  const tu = timeUntil(datetime)
  const color = urgencyColor(tu.minutes)

  return (
    <article className="card" aria-labelledby={`title-${id}`}>
      <div className="card-left">
        <div className="media" style={{backgroundImage: image ? `url(${image})` : undefined}}>
          {!image && <div className="media-placeholder">{category?.slice(0,1) ?? 'E'}</div>}
        </div>
      </div>
      <div className="card-main">
        {category && <span className="card-category">{category}</span>}
        <h3 id={`title-${id}`} className="card-title">{title}</h3>
        <div className="card-meta">
          <span className="venue-icon">📍</span>{venue} • {new Date(datetime).toLocaleString()}
        </div>
        <p className="card-opinion">{opinionatedLine({title, venue, category})}</p>
      </div>
      <div className="card-badge" style={{backgroundColor: color, borderColor: color}}>
        <div className="badge-dot" style={{background: 'white'}} />
        <div className="badge-text">{tu.label}</div>
      </div>
    </article>
  )
}
