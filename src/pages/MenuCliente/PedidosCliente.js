import React, {Component}  from 'react';
import Helmet from 'react-helmet'
import MenuPrincipal from './MenuPrincipal';
import '../../pages/MenuCliente/Carrinho.css'
import { NavLink } from 'react-router-dom';
import '../../pages/MenuCliente/PedidosCliente.css'

class PedidosCliente extends Component{
    constructor(props) {
        super(props)
        this.state ={
            values:[],
            Produtos:[]
         };
        
        }

componentDidMount() {
    const cliente = JSON.parse(localStorage.getItem("login"))
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


 PedidoItem=(id) =>{
    const produtosarray=[] 
    var produto1 =  this.state.values.map((obj) => {
        if(obj.PedidoID === id.target.value){
            var produto2 = obj.Produtos.map((produto,index) => {
                produtosarray.push(produto)   
                        
            })
            
        }
    })
    this.setState(prevState => ({
        teste: [...prevState.Produtos, 'new value'] 
      }));
    console.log(produtosarray)
    console.log(this.state)
    
}
    render(){
            return<React.Fragment>
            <MenuPrincipal/>
            <div className="PedidosCliente">
            <Helmet title="Pedidos" />    
            <div className="top-carrinho"></div>   
            <hr className="hr-carrinho"/>
            <ul>
                <li>
                <NavLink className="a-frutas" exact to="/home" activeClassName="active">Página inicial</NavLink>
                </li>
                <li>
                <strong className="span-frutas">Carrinho</strong>
                </li>
            </ul>
            <hr className="hr-frutas"/>    
            <table id="example" className="table table-striped table-bordered nowrap">
				<thead>
					<tr>
						<th>Pedido</th>
						<th>Data do Pedido</th>
						<th>Situação do Pedido</th>
						<th>Valor do Pedido</th>
                        <th>Ação</th>
					</tr>
				</thead>
                <tbody>
                {this.state.values.map(obj => {
                return ( 
                    <tr key={obj.PedidoID}>
                        <td>{obj.PedidoID}</td>
                        <td>{obj.DataPedido}</td>
                        <td>{obj.Situacao}</td>
                        <td>R$ {obj.ValorNota.toString().replace(".", ",")}</td>
                    <td><button className="btn btn-success ml-3" data-toggle="modal" data-target=".bd-example-modal-lg" value={obj.PedidoID} onClick={this.PedidoItem}>Abrir</button></td>
                    </tr>
                    );
                })} 
            </tbody>
			</table>
            <div className="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <table id="example2" className="table table-striped table-bordered nowrap">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unitário</th>
                                    <th>Valor Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>                                    
                        </table>
                    </div>
                </div>
            </div>
            <div className="footer" ></div>
            </div>    
            </React.Fragment>

}
}
export default PedidosCliente