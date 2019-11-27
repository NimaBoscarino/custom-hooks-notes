import React, { useState } from 'react';

const Movie = ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Oceans 11",
      description: "Cool peeps plan a heist"
    },
    {
      title: "Big Lebowski",
      description: "It really tied the room together"
    },
    {
      title: "The Lakehouse",
      description: "I'm in this house, but so are you. In the same place, but not the same time."
    },
  ])

  const addMovie = () => {
    const movieToAdd = {
      title: "Dune",
      description: "Gotta control the spice!"
    }

    const newMovies = [...movies, movieToAdd]
    setMovies(newMovies)
    // movies.push(movieToAdd)
  }


  const badRemoveMovie = () => {
    setTimeout(() => {
      const newMovies = movies.slice(0, -1)
      setMovies(newMovies)
    }, 2000)
  }

  const removeMovie = () => {
    setTimeout(() => {
      setMovies((currentMovies) => {
        const newMovies = currentMovies.slice(0, -1)
        return newMovies
      })
    }, 2000)
  }

  return (
    <div>
      <button onClick={addMovie}>
        Add Movie
      </button>
      <button onClick={removeMovie}>
        Remove Movie
      </button>

      {
        movies.map(m => {
          return (
            <Movie title={m.title} description={m.description}/>
          )
        })
      }
    </div>
  );
}

export default App;
