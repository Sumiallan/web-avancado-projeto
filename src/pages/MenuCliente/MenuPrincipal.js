import React, {Component}  from 'react';
import Helmet from 'react-helmet'

import '../../pages/MenuCliente/menuCliente.css'
import { NavLink } from 'react-router-dom';
export default class MenuPrincipal extends Component{   
  
  render(){
            return(
            <div className="menu">
            <Helmet title="Cliente" />
            <div className="img-div-MenuPrincipal">
            <img className="img-MenuPrincipal" src="/Logo2teste.png" alt="Ifruit - A feira totalmente online"/> 
               
            <div className="rounded" id="menusuperior" >
                <ul className="nav justify-content-end border">
                    <li className="nav-item ">
                    <NavLink className="nav-link active" exact to="/pedidoscliente">Meus Pedidos</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" exact to="/minhaconta">Minha Conta</NavLink>
                    </li>
                </ul>
            </div>
            
                <ul className="nav justify-content-end" id="nav-MenuPrincipal">
                <nav className="navbar">
                  <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                  </form>
                </nav>
                
              <li className="nav-item dropdown">
                <a id="carrinho" className="rounded nav-link dropdown-toggle border border-success " data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Carrinho</a>
                <div className="dropdown-menu">
                <NavLink className="dropdown-item" exact to="/carrinho">Ver Carrinho</NavLink>
                </div>
              </li>
              </ul>
              </div>
                <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/home" activeClassName="active">Página inicial</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/frutas" activeClassName="active">Frutas</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" exact to="/verduras" activeClassName="active">Verduras</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" exact to="/legumes" activeClassName="active">Legumes</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" exact to="/kits" activeClassName="active">Kits</NavLink>
                  </li>
                </ul>	
   
            </div>
            
          )
        }
}
