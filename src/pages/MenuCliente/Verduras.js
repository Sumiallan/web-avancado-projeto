import React,{Component} from 'react';
import Helmet from 'react-helmet'
import '../../pages/MenuCliente/Verduras.css'
import MenuPrincipal from './MenuPrincipal';
import { NavLink } from 'react-router-dom';
export default class  Verduras extends Component{
    constructor(props) {
        super(props)
        this.state ={
            showMe:true,
            verduras:{
                Agriao :0,
                Mostarda :0,
                Rucula :0,
                Couve :0,
                Espinafre :0,
                Repolho :0,
                Brocolis :0,
                Alface :0,
            },
            values:[]
         };
        
    }
    componentDidMount() {
        fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/produtos/2')
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
    increment = (event) => {
        
        this.setState({
            verduras:{
                ...this.state.verduras,
                [event.target.value]:this.state.verduras[event.target.value] +1,
            } 
        })
        console.log(this.state)
      }  

    decrement = (event) => {

        if(this.state.verduras[event.target.value]>0){
            this.setState({
                verduras:{
                    ...this.state.verduras,
                    [event.target.value]:this.state.verduras[event.target.value] -1,
                } 
            })
        }
    }

    Carrinho(preco,id){
        var existingEntries = JSON.parse(localStorage.getItem("carrinho"));
        if(existingEntries == null) existingEntries = [];  
        Object.entries(this.state.verduras).map(([key, value]) => {
            if(value>0){
                var obj={
                    id:id,
                    nome:key,
                    quantidade:value,
                    valorUnitario:preco,
                    total:(value*preco).toFixed(2)

                }
                console.log(obj)
                this.setState({
                    verduras:{
                        ...this.state.verduras,
                        [key]:0,
                    } 
                })
          
            existingEntries.push(obj);
            localStorage.setItem("carrinho", JSON.stringify(existingEntries));
            //localStorage.removeItem('carrinhoverduras')
             return    
            }
       
         })

        
        console.log(localStorage)
    }     

  render(){
        return <React.Fragment>
            <MenuPrincipal/>
      <div className="MenuVerduras">
          <Helmet title="Verduras" />
         <div className="top-fruta"></div> 
        <hr className="hr-verduras"/>
            <ul>
                <li>
                <NavLink className="a-verduras" exact to="/home" activeClassName="active">Página inicial</NavLink>
                </li>
                <li>
                <strong className="span-verduras">Verduras</strong>
                </li>
            </ul>
            <hr className="hr-verduras"/> 
            <h1 className="h1-verduras">verduras</h1>
        <ul className="ul-verduras">
        {this.state.values.map(obj => {
            return (   
        <li className="li-verduras" key={obj.ProdutoID} value={obj.ProdutoID} >
            <div className="imagem-produto">
                <img src={obj.productName+".jpg"} alt={obj.productName} className="imagem-principal"/>
            </div>
            <div className="nome-verduras">
                <p className="p-verduras">{obj.productName}</p>
            </div>
            <div className="icone-verduras">
                <button type="button" id={obj.ProdutoID} className="btn-verduras" value={obj.productName} onClick={this.decrement}>-</button>
                <p className="p-btn-verduras">{this.state.verduras[obj.productName]}</p>
                <button type="button" className="btn-verduras" value={obj.productName} onClick={this.increment}>+</button>
            </div>
            {
            this.state.verduras[obj.productName]> 0? (
                    <div className="carrinho-verduras">
                <button type="button"  className="btn-carrinho-verduras" value={obj.preco} onClick={(e) => this.Carrinho(obj.preco,obj.ProdutoID)}>Adicionar ao Carrinho</button>
                </div>
            ) : ''
             }
            <div className="preco-verduras">
                <h2>R${obj.preco.toString().replace(".", ",")}</h2>
            </div>    
        </li>
        );
    })} 
        </ul> {
        this.state.values.length===0? (
                    <div className="mensagem-verduras">
                        <h1 className="h1-verduras">FORA DE ESTOQUE</h1>
                </div>
            ) : ''
             }     
      </div>
      </React.Fragment>
}
} 