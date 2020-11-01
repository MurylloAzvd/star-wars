import { useState, useEffect } from 'react';
import './App.css';
// import Routes from './routes';

function App() {

  // const [page, setPage] = useState(1);
  // const [isLoaded, setIsLoaded] = useState(false);

  let url = "https://swapi.dev/api/people/";
  const [pers, setPers] = useState([]);

  // function inclementaPagina() {
  //   setIsLoaded(false);
  //   setPage(page + 1);

  //   const urlPagination = url + "?page=" + page;


  //   fetch(urlPagination)
  //   .then(res => res.json())
  //   .then((result) => {
  //     setIsLoaded(true);
  //     if (result.count > 0) {
  //       setPers(result.results);
  //     }
  //   },
  //   (error) => {
  //     setIsLoaded(true);
  //   })
  // }
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        setPers(result.results);
      })
  }, []);

  // fetch(url)
  //   .then(res => res.json())
  //   .then((result) => {
  //     setPers(result.results);
  //     console.log(pers);
  //   })
  
  return (
    <div>
      <h1>Personagens</h1>
      {console.log(pers)}
      <ul>
        {pers.map((p, index) => 
          <li key={index}>{p.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
