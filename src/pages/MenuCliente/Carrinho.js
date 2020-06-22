import React, {Component}  from 'react';
import MenuPrincipal from './MenuPrincipal';
import '../../pages/MenuCliente/Carrinho.css'
import { NavLink } from 'react-router-dom';

class Carrinho extends Component{

    constructor(props) {
      var existingEntries = JSON.parse(localStorage.getItem("carrinho"));
      var totalProdutos = 0
      var totalProdutosF = 0
      if(existingEntries == null) existingEntries = []; 
      if(existingEntries !== null){
       existingEntries.map((carrinho, index) => {
         const {total} = carrinho //destructuring
   
         totalProdutos = (parseFloat(totalProdutos)+parseFloat(total)).toFixed(2)
         totalProdutosF = totalProdutos
         return totalProdutosF
      }) 
   }
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            valorTotal:totalProdutosF
        }
     }

     componentDidMount() {
      var existingEntries = JSON.parse(localStorage.getItem("carrinho"));
      if(existingEntries == null) existingEntries = [];
  }


   renderTableData() {
      
      var existingEntries = JSON.parse(localStorage.getItem("carrinho"));
      if(existingEntries == null) existingEntries = [];
      if(existingEntries !== null){
         return existingEntries.map((carrinho, index) => {
            const { id,quantidade, nome,valorUnitario, total} = carrinho //destructuring
            return (
               <tr key={id}>
                  <td>{nome}</td>
                  <td>{quantidade}</td>
                  <td>R$ {valorUnitario.toString().replace(".", ",")}</td>
                  <td>R$ {total.toString().replace(".", ",")}</td>
               </tr>
            )
            
      })
   }
      
   }
   limpar = () => { 
      return localStorage.removeItem('carrinho')
   };

   pedido = () => { 
      const data ={
         "Cliente":JSON.parse(localStorage.getItem("login")) ,
         "ValorNota":this.state.valorTotal,
         "Produtos":JSON.parse(localStorage.getItem("carrinho"))} 
         console.log(data)
      const requestInfo = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
      };
      fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/pedido', requestInfo)
      .then(response => {
          if(response.ok) {
            this.setState({valorTotal:0})
            localStorage.removeItem('carrinho')
              return response.json()
          }
          
      })
      .then(data =>{
          if(data.resposta!=="") {
              throw new Error(data.resposta);  
          }
      })
      .catch(e => {
          this.setState({ message: e.message });
      }); 
   }
    render(){
            return<React.Fragment>
            <MenuPrincipal/>
            <div className="Carrinho">
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
            <table id='students' className="table table-bordered table-striped">
               <thead>
                  <tr>
                     <th scope="col">Nome</th>
                     <th scope="col">Quantidade</th>
                     <th scope="col">Valor Unitário</th>
                     <th scope="col">Total</th>
                  </tr>
               </thead>               
               <tbody>
                  {this.renderTableData()}
                  <tr>
                     <td colSpan="3" className="p-4">
                     </td> 
                     <td colSpan="1">
                        Total: 
                        <span className="font-weight-semiBold font-size-18">
                        <span>R$ {this.state.valorTotal.toString().replace(".", ",")}</span>
                        </span>
                     </td>
                  </tr>
               </tbody>
            </table>
            <div className="btn-carrinho">
            {
               JSON.parse(localStorage.getItem("carrinho"))!== null? (
               
                  <button className="btn btn-success ml-3" onClick={this.pedido}>Finalizar compra</button>
               ) : ''
            }
            {
               JSON.parse(localStorage.getItem("carrinho"))!== null? ( 
                  <button className="btn btn-danger ml-3" onClick={this.limpar}>Limpar Carrinho</button>
               ) : ''
            }
            </div>
            </div>    
            </React.Fragment>

}
}
export default Carrinho