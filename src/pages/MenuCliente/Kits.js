import React,{Component} from 'react';
import Helmet from 'react-helmet'
import '../../pages/MenuCliente/Kits.css'
import MenuPrincipal from './MenuPrincipal';
import { NavLink } from 'react-router-dom';
export default class  Kits extends Component{
    constructor(props) {
        super(props)
        this.state ={
            showMe:true,
            Kits:{
                Kit1 :0,
                Kit2 :0,
                Kit3 :0,
                Kit4 :0
            },
            values:[]
         };
        
    }
    componentDidMount() {
        fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/produtos/4')
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
            Kits:{
                ...this.state.Kits,
                [event.target.value]:this.state.Kits[event.target.value] +1,
            } 
        })
        console.log(this.state)
      }  

    decrement = (event) => {

        if(this.state.Kits[event.target.value]>0){
            this.setState({
                Kits:{
                    ...this.state.Kits,
                    [event.target.value]:this.state.Kits[event.target.value] -1,
                } 
            })
        }
    }

    Carrinho(preco,id){
        var existingEntries = JSON.parse(localStorage.getItem("carrinho"));
        if(existingEntries == null) existingEntries = [];  
        Object.entries(this.state.Kits).map(([key, value]) => {
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
                    Kits:{
                        ...this.state.Kits,
                        [key]:0,
                    } 
                })
          
            existingEntries.push(obj);
            localStorage.setItem("carrinho", JSON.stringify(existingEntries));
            //localStorage.removeItem('carrinhoKits')
             return    
            }
       
         })

        
        console.log(localStorage)
    }     

  render(){
        return <React.Fragment>
            <MenuPrincipal/>
      <div className="MenuKits">
          <Helmet title="Kits" />
         <div className="top-fruta"></div> 
        <hr className="hr-Kits"/>
            <ul>
                <li>
                <NavLink className="a-Kits" exact to="/home" activeClassName="active">Página inicial</NavLink>
                </li>
                <li>
                <strong className="span-Kits">Kits</strong>
                </li>
            </ul>
            <hr className="hr-Kits"/> 
            <h1 className="h1-Kits">Kits</h1>
        <ul className="ul-Kits">
        {this.state.values.map(obj => {
            return (   
        <li className="li-Kits" key={obj.ProdutoID} value={obj.ProdutoID} >
            <div className="imagem-produto">
                <img src={obj.productName+".jpg"} alt={obj.productName} className="imagem-principal"/>
            </div>
            <div className="nome-Kits">
                <p className="p-Kits">{obj.productName}</p>
            </div>
            <div className="icone-Kits">
                <button type="button" id={obj.ProdutoID} className="btn-Kits" value={obj.productName} onClick={this.decrement}>-</button>
                <p className="p-btn-Kits">{this.state.Kits[obj.productName]}</p>
                <button type="button" className="btn-Kits" value={obj.productName} onClick={this.increment}>+</button>
            </div>
            {
            this.state.Kits[obj.productName]> 0? (
                    <div className="carrinho-Kits">
                <button type="button"  className="btn-carrinho-Kits" value={obj.preco} onClick={(e) => this.Carrinho(obj.preco,obj.ProdutoID)}>Adicionar ao Carrinho</button>
                </div>
            ) : ''
             }
            <div className="preco-Kits">
                <h2>R${obj.preco.toString().replace(".", ",")}</h2>
            </div>    
        </li>
        );
    })} 
        </ul> {
        this.state.values.length===0? (
                    <div className="mensagem-Kits">
                        <h1 className="h1-Kits">FORA DE ESTOQUE</h1>
                </div>
            ) : ''
             }     
      </div>
      </React.Fragment>
}
} 