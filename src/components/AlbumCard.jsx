import React from 'react'
import { Link } from 'react-router-dom'

const AlbumCard = ({ song }) => (
  <div className='col text-center' id={song?.id}>
    <Link to={'/album/' + song?.album.id}>
      <div>
        <img className='img-fluid' src={song?.album.cover_medium} alt='1' />
      </div>
    </Link>
    <p>
      <Link to={'/album/' + song?.album.id}>
        <span>Album:&nbsp;</span>
        <span>
          "
          {song?.album.title.length < 16
            ? song?.album.title
            : song?.album.title.substring(0, 16) + '...'}
          "
        </span>
        <br />
      </Link>
      <Link to={'/artist/' + song?.artist.id}>
        <span>Artist:&nbsp;</span>
        <span>{song?.artist.name}</span>
      </Link>
    </p>
  </div>
)

export default AlbumCard
