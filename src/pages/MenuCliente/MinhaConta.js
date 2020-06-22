import React, {Component}  from 'react';
import Helmet from 'react-helmet'
import MenuPrincipal from './MenuPrincipal';
import '../../pages/MenuCliente/Carrinho.css'
import '../../pages/MenuCliente/MinhaConta.css'
import { NavLink } from 'react-router-dom';

class MinhaConta extends Component{

    constructor(props) {
        super(props)
        this.state ={
            login:''
         };
        
        }

    componentDidMount() {
        const cliente = JSON.parse(localStorage.getItem("login"))
        this.setState({
            login:cliente})
        fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/pedidocliente/'+cliente)
        .then(response => response.json())
        .then((jsonData) => {
            // jsonData is parsed json object received from url
            this.setState({
                values:jsonData})
        })
        .catch((error) => {
            // handle your errors here
        })
    }

    render(){
            return<React.Fragment>
            <MenuPrincipal/>
            <div className="Carrinho">
            <Helmet title="Minha Conta" />  
            <div className="top-carrinho"></div>   
            <hr className="hr-carrinho"/>
            <ul>
                <li>
                <NavLink className="a-frutas" exact to="/home" activeClassName="active">Página inicial</NavLink>
                </li>
                <li>
                <strong className="span-frutas">Minha Conta</strong>
                </li>
            </ul>
            <hr className="hr-frutas"/>
            <div className="container" id="div-form">
            <form>
                <div className="form-row" id="formMinhaConta">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" value={this.state.login}  id="inputEmail4" disabled/>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Nome</label>
                    <input type="text" className="form-control" id="inputnome" disabled/>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputZip">CPF</label>
                    <input type="text" className="form-control" id="inputcpf" disabled/>
                    </div>    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Endereço</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" disabled/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress2">Estado</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="" disabled/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" disabled/>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Cep</label>
                    <input type="text" className="form-control" id="inputZip" disabled/>
                    </div>
                </div>
                <div className="btn-carrinho">
                    <button type="button" className="btn btn-primary">Atualizar Dados</button>
                </div>
                </form>  
                </div>              
            </div>    
            </React.Fragment>

}
}
export default MinhaConta