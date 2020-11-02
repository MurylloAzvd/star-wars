import { useState, useEffect } from 'react';
import './index.css';


function Ship() {


    let url = "https://swapi.dev/api/starships/";
    const [ships, setShips] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const [shipCurrent, setShipCurrent] = useState({});
  
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
        <ul>
          {ships.map((p, index) => 
            <li key={index}><a href="#" onClick={() => loadShipDetails(p.url)}>{p.name}</a></li>
          )}
        </ul>
        
        <nav aria-label="Navegação de página exemplo">
          <ul className="pagination">
          { prevPage && <li className="page-item"><a className="page-link" href="#" onClick={prev}>Anterior</a></li> }
            <li className="page-item"><a className="page-link" href="#">{currentPage}</a></li>
          { nextPage && <li className="page-item"><a className="page-link" href="#" onClick={next}>Próximo</a></li> }
          </ul>
        </nav>

        <div>
            <h2>Detalhes das naves</h2>
            <ul>
                <li>Nome: {shipCurrent.name}</li>
                <li>Modelo: {shipCurrent.model}</li>
                <li>Fabricante: {shipCurrent.manufacturer}</li>
                <li>Custo: {shipCurrent.cost_in_credits}</li>
                <li>Comprimento: {shipCurrent.length}</li>
                <li>Velocidade Máxima: {shipCurrent.max_atmosphering_speed}</li>
            </ul>
        </div>

      </div>
    );
  }
  
  export default Ship;