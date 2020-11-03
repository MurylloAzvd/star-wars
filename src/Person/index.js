import { useState, useEffect } from 'react';
import './index.css';


function Person() {


    let url = "https://swapi.dev/api/people/";
    const [person, setPerson] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
  
    useEffect(() => {
      LoadDate(url);
    }, []);
  
    function LoadDate(pageUrl) {
      fetch(pageUrl)
        .then(res => res.json())
        .then((result) => {
          setPerson(result.results);
          setNextPage(result.next);
          setPrevPage(result.previous);
        })
    }
  
    function next() {
      LoadDate(nextPage);
      let followPage = currentPage + 1;
      setcurrentPage(followPage);
    }
  
    function prev() {
      LoadDate(prevPage);
      let followPage = currentPage - 1;
      setcurrentPage(followPage);
    }
  
    
    return (
      <div>
        <h1>Persononagens</h1>
        <ul className="list-group">
          {person.map((p, index) => 
            <li className="list-group-item" key={index}>{p.name}</li>
          )}
        </ul>
        
        <nav aria-label="Navegação de página exemplo">
          <ul className="pagination">
          { prevPage && <li className="page-item"><a className="page-link" onClick={prev}>Anterior</a></li> }
            <li className="page-item"><a className="page-link" href="#">{currentPage}</a></li>
          { nextPage && <li className="page-item"><a className="page-link" onClick={next}>Próximo</a></li> }
          </ul>
        </nav>
  
      </div>
    );
  }
  
  export default Person;