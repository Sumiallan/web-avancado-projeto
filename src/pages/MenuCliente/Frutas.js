import React,{Component} from 'react';
import Helmet from 'react-helmet'
import '../../pages/MenuCliente/Frutas.css'
import MenuPrincipal from './MenuPrincipal';
import { NavLink } from 'react-router-dom';
export default class  Frutas extends Component{
    constructor(props) {
        super(props)
        this.state ={
            showMe:true,
            frutas:{
                Atemoia :0,
                Abacate :0,
                Mamao :0,
                Maracuja :0,
                Uva :0,
                Banana :0,
                Melao :0,
                Maca :0,
            },
            values:[]
         };
        
    }
    componentDidMount() {
        fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/produtos/1')
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
            frutas:{
                ...this.state.frutas,
                [event.target.value]:this.state.frutas[event.target.value] +1,
            } 
        })
        console.log(this.state)
      }  

    decrement = (event) => {

        if(this.state.frutas[event.target.value]>0){
            this.setState({
                frutas:{
                    ...this.state.frutas,
                    [event.target.value]:this.state.frutas[event.target.value] -1,
                } 
            })
        }
    }

    Carrinho(preco,id){
        var existingEntries = JSON.parse(localStorage.getItem("carrinho"));
        if(existingEntries == null) existingEntries = [];  
        Object.entries(this.state.frutas).map(([key, value]) => {
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
                    frutas:{
                        ...this.state.frutas,
                        [key]:0,
                    } 
                })
          
            existingEntries.push(obj);
            localStorage.setItem("carrinho", JSON.stringify(existingEntries));
            //localStorage.removeItem('carrinhoFrutas')
             return    
            }
       
         })

        
        console.log(localStorage)
    }     

  render(){
        return <React.Fragment>
            <MenuPrincipal/>
      <div className="MenuFrutas">
          <Helmet title="Frutas" />
         <div className="top-fruta"></div> 
        <hr className="hr-frutas"/>
            <ul>
                <li>
                <NavLink className="a-frutas" exact to="/home" activeClassName="active">Página inicial</NavLink>
                </li>
                <li>
                <strong className="span-frutas">Frutas</strong>
                </li>
            </ul>
            <hr className="hr-frutas"/> 
            <h1 className="h1-frutas">FRUTAS</h1>
        <ul className="ul-Frutas">
        {this.state.values.map(obj => {
            return (   
        <li className="li-Frutas" key={obj.ProdutoID} value={obj.ProdutoID} >
            <div className="imagem-produto">
                <img src={obj.productName+".jpg"} alt={obj.productName} className="imagem-principal"/>
            </div>
            <div className="nome-frutas">
                <p className="p-Frutas">{obj.productName}</p>
            </div>
            <div className="icone-frutas">
                <button type="button" id={obj.ProdutoID} className="btn-Frutas" value={obj.productName} onClick={this.decrement}>-</button>
                <p className="p-btn-Frutas">{this.state.frutas[obj.productName]}</p>
                <button type="button" className="btn-Frutas" value={obj.productName} onClick={this.increment}>+</button>
            </div>
            {
            this.state.frutas[obj.productName]> 0? (
                    <div className="carrinho-frutas">
                <button type="button"  className="btn-carrinho-Frutas" value={obj.preco} onClick={(e) => this.Carrinho(obj.preco,obj.ProdutoID)}>Adicionar ao Carrinho</button>
                </div>
            ) : ''
             }
            <div className="preco-frutas">
                <h2>R${obj.preco.toString().replace(".", ",")}</h2>
            </div>    
        </li>
        );
    })} 
        </ul> {
        this.state.values.length===0? (
                    <div className="mensagem-frutas">
                        <h1 className="h1-frutas">FORA DE ESTOQUE</h1>
                </div>
            ) : ''
             }     
      </div>
      </React.Fragment>
}
} 