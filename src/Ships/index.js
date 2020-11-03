import { useState, useEffect } from 'react';
import './index.css';


function Ship() {


    let url = "https://swapi.dev/api/starships/";
    const [ships, setShips] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const [shipCurrent, setShipCurrent] = useState(
      {
        model: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
        max_atmosphering_speed: ""
      }
    );
  
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

        <section className="page-section portfolio" id="naves">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Naves</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row">
                    {/* <!-- Portfolio Item 1--> */}
                      {ships.map((p, index) => 


                        <div className="col-md-6 col-lg-4 mb-5">
                            <a onClick={() => loadShipDetails(p.url)}>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                {p.name}
                            </div>
                            </a>
                        </div>



                      )}
                    
                    
                </div>

                <nav aria-label="Navegação de página exemplo">
                  <ul className="pagination">
                  { prevPage && <li className="page-item"><a className="page-link"  onClick={prev}>Anterior</a></li> }
                    <li className="page-item"><a className="page-link">{currentPage}</a></li>
                  { nextPage && <li className="page-item"><a className="page-link" onClick={next}>Próximo</a></li> }
                  </ul>
                </nav>

            </div>
            

        </section>


        {/* { shipCurrent && */}
        <div className="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-labelledby="portfolioModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModalLabel">{shipCurrent.name}</h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-5">
                                      <li>Modelo: {shipCurrent.model}</li>
                                      <li>Fabricante: {shipCurrent.manufacturer}</li>
                                      <li>Custo: {shipCurrent.cost_in_credits}</li>
                                      <li>Comprimento: {shipCurrent.length}</li>
                                      <li>Velocidade Máxima: {shipCurrent.max_atmosphering_speed}</li>                                       
                                    </p>
                                    <button className="btn btn-primary" data-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* } */}
      </div>
    );
  }
  
  export default Ship;