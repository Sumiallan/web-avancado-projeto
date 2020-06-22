import React,{Component} from 'react';
import '../../pages/MenuCliente/Menu3.css'
import { NavLink } from 'react-router-dom';
class  Menu3 extends Component{
  render(){
    return (
    <div className="Menu3">
       <h1>DESTAQUES</h1>
        <ul className="ul-Menu3">
        <li className="li-Menu3">

            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/kits" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/55431643/344f587089.jpg" alt="Kit 4 de Frutas - 14 itens" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-kits">
                <NavLink className="nav-link" exact to="/kits" activeClassName="active"><p className="p-Frutas">Kit 4 de Frutas - 14 itens</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 75,00</h2>
            </div>
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/kita" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/55431486/3deea402b5.jpg" alt="Kit 3 de Legumes - 15 itens" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-kits">
                <NavLink className="nav-link" exact to="/kits" activeClassName="active"><p className="p-Frutas">Kit 3 de Legumes - 15 itens</p></NavLink>
            </div>
            <div className="preco-menu3">
                <h2>R$ 50,00</h2>
            </div>              
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/kits" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/55431246/484cdaaba3.jpg" alt="Kit 2 de 15 itens" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-kits">
                <NavLink className="nav-link" exact to="/kits" activeClassName="active"><p className="p-Frutas">Kit 2 de 15 itens</p></NavLink>
            </div>
            <div className="preco-menu3">
                <h2>R$ 55,00</h2>
            </div>              
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/kits" activeClassName="active"> <img src="https://cdn.awsli.com.br/300x300/305/305913/produto/55430709/9acb23c2e0.jpg" alt="Kit 1 de 18 itens" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-kits">
                <NavLink className="nav-link" exact to="/kits" activeClassName="active"><p className="p-Frutas">Kit 1 de 18 itens</p></NavLink>
            </div>
            <div className="preco-menu3">
                <h2>R$ 80,00</h2>
            </div>              
        </li>
        </ul>        
        <h1>FRUTAS</h1>
        <ul className="ul-Menu3">
        <li className="li-Menu3">
            <div className="imagem-produto">
                <NavLink className="nav-link" exact to="/frutas" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/55426241/b8db91784d.jpg" alt="Atemoia(unidade)" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-frutas">
            <NavLink className="nav-link" exact to="/frutas" activeClassName="active"><p className="p-Frutas">Atemoia</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 3,90</h2>
            </div>    
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/frutas" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/10491472/062babe45a.jpg" alt="Abacate" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-frutas">
            <NavLink className="nav-link" exact to="/frutas" activeClassName="active"><p className="p-Frutas">Abacate</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 4,90</h2>
            </div>      
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/frutas" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/10293645/mamao-6686b01d.jpg" alt="Mamao" className="imagem-principal"/></NavLink>
            </div>  
            <div className="nome-frutas">
            <NavLink className="nav-link" exact to="/frutas" activeClassName="active"> <p className="p-Frutas">Mamão</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 4,30</h2>
            </div>    
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/frutas" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/10293681/maracuja-c4f478f6.jpg" alt="Maracuja" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-frutas">
            <NavLink className="nav-link" exact to="/frutas" activeClassName="active"><p className="p-Frutas">Maracujá</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 2,30</h2>
            </div>      
        </li>
        </ul> 
        <h1>VERDURAS</h1>
        <ul className="ul-Menu3">
        <li className="li-Menu3">
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/10293450/alface-6f113512.jpg" alt="Alface" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-verduras">
                <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><p className="p-Frutas">Alface</p></NavLink>
            </div>
            <div className="preco-menu3">
                <h2>R$ 1,50</h2>
            </div>    
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/10293523/brocolis-c5c66746.jpg" alt="brocolis" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-verduras">
                <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><p className="p-Frutas">Brocolis</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 3,50</h2>
            </div>     
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/10293844/repolho-455c05b9.jpg" alt="repolho" className="imagem-principal"/></NavLink>
            </div>
            <div className="nome-verduras">
                <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><p className="p-Frutas">Repolho</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 5,45</h2>
            </div>      
        </li>
        <li className="li-Menu3">    
            <div className="imagem-produto">
            <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><img src="https://cdn.awsli.com.br/300x300/305/305913/produto/10293854/rucula-56eba55c.jpg" alt="rucula" className="imagem-principal"/></NavLink>
            </div> 
            <div className="nome-verduras">
                <NavLink className="nav-link" exact to="/verduras" activeClassName="active"><p className="p-Frutas">Rucula</p></NavLink>
            </div> 
            <div className="preco-menu3">
                <h2>R$ 2,50</h2>
            </div>     
        </li>
        </ul>                  
    </div>

    );
}
}

export default Menu3