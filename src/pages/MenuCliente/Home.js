import React,{Component} from 'react';
import Slide from '../../pages/MenuCliente/Slide'
import MenuSecundario from '../../pages/MenuCliente/MenuSecundario'
import Menu3 from '../../pages/MenuCliente/Menu3'
import MenuPrincipal from './MenuPrincipal';

class  Home extends Component{

  render(){
    return <React.Fragment>
    <MenuPrincipal/>
      <div className="Home">
            <Slide/>
            <MenuSecundario/>
            <Menu3/> 
      </div>
      </React.Fragment>
}
}

export default Home;