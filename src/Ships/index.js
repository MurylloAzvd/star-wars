import { useState, useEffect } from 'react';
import './index.css';


function Ship() {


    let url = "https://swapi.dev/api/starships/";
    const [ships, setShips] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const [shipCurrent, setShipCurrent] = useState(null);
  
    useEffect(() => {
      LoadDate(url);
    }, []);
  
    function LoadDate(pageUrl) {
      fetch(pageUrl)
        .then(res => res.json())
        .then((result) => {
          setShips(result.results);
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
    
    function loadShipDetails(urlShip) {
        fetch(urlShip)
            .then(res => res.json())
            .then((result) => {
                setShipCurrent(result);
            })
    }
    
    return (
      <div>
        <h1>Naves</h1>
        <ul className="list-group">
          {ships.map((p, index) => 
            <li className="list-group-item" key={index}><a onClick={() => loadShipDetails(p.url)}>{p.name}</a></li>
          )}
        </ul>
        
        <nav aria-label="Navegação de página exemplo">
          <ul className="pagination">
          { prevPage && <li className="page-item"><a className="page-link"  onClick={prev}>Anterior</a></li> }
            <li className="page-item"><a className="page-link">{currentPage}</a></li>
          { nextPage && <li className="page-item"><a className="page-link" onClick={next}>Próximo</a></li> }
          </ul>
        </nav>
        
        { shipCurrent && 
        <div>
            <h2>Detalhes da nave:</h2>
            <ul>
                <li>Nome: {shipCurrent.name}</li>
                <li>Modelo: {shipCurrent.model}</li>
                <li>Fabricante: {shipCurrent.manufacturer}</li>
                <li>Custo: {shipCurrent.cost_in_credits}</li>
                <li>Comprimento: {shipCurrent.length}</li>
                <li>Velocidade Máxima: {shipCurrent.max_atmosphering_speed}</li>
            </ul>
        </div>
        }

      </div>
    );
  }
  
  export default Ship;