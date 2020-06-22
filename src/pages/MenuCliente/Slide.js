import React,{Component} from 'react';

class Slide extends Component{
  render(){
    return (
        <div id="carouselExampleControls" className="carousel" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://cdn.awsli.com.br/1140x1140/305/305913/banner/d17e2eed6c.png" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://cdn.awsli.com.br/1140x1140/305/305913/banner/2c1f67632b.png" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://cdn.awsli.com.br/1140x1140/305/305913/banner/65cbd60d4b.png" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
            </a>
        </div>
    );
}
}

export default Slide;