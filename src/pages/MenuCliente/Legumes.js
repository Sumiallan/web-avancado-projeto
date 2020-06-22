import React,{Component} from 'react';
import Helmet from 'react-helmet'
import '../../pages/MenuCliente/Legumes.css'
import MenuPrincipal from './MenuPrincipal';
import { NavLink } from 'react-router-dom';
export default class  Legumes extends Component{
    constructor(props) {
        super(props)
        this.state ={
            showMe:true,
            Legumes:{
                Pimentao :0,
                Beterraba :0,
                Chuchu :0,
                Tomate :0,
                Berinjela :0,
                Macaxeira :0,
                Batata :0,
                Cenoura :0,
            },
            values:[]
         };
        
    }
    componentDidMount() {
        fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/produtos/3')
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
            Legumes:{
                ...this.state.Legumes,
                [event.target.value]:this.state.Legumes[event.target.value] +1,
            } 
        })
        console.log(this.state)
      }  

    decrement = (event) => {

        if(this.state.Legumes[event.target.value]>0){
            this.setState({
                Legumes:{
                    ...this.state.Legumes,
                    [event.target.value]:this.state.Legumes[event.target.value] -1,
                } 
            })
        }
    }

    Carrinho(preco,id){
        var existingEntries = JSON.parse(localStorage.getItem("carrinho"));
        if(existingEntries == null) existingEntries = [];  
        Object.entries(this.state.Legumes).map(([key, value]) => {
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
                    Legumes:{
                        ...this.state.Legumes,
                        [key]:0,
                    } 
                })
          
            existingEntries.push(obj);
            localStorage.setItem("carrinho", JSON.stringify(existingEntries));
            //localStorage.removeItem('carrinhoLegumes')
             return    
            }
       
         })

        
        console.log(localStorage)
    }     

  render(){
        return <React.Fragment>
            <MenuPrincipal/>
      <div className="MenuLegumes">
          <Helmet title="Legumes" />
         <div className="top-fruta"></div> 
        <hr className="hr-Legumes"/>
            <ul>
                <li>
                <NavLink className="a-Legumes" exact to="/home" activeClassName="active">Página inicial</NavLink>
                </li>
                <li>
                <strong className="span-Legumes">Legumes</strong>
                </li>
            </ul>
            <hr className="hr-Legumes"/> 
            <h1 className="h1-Legumes">Legumes</h1>
        <ul className="ul-Legumes">
        {this.state.values.map(obj => {
            return (   
        <li className="li-Legumes" key={obj.ProdutoID} value={obj.ProdutoID} >
            <div className="imagem-produto">
                <img src={obj.productName+".jpg"} alt={obj.productName} className="imagem-principal"/>
            </div>
            <div className="nome-Legumes">
                <p className="p-Legumes">{obj.productName}</p>
            </div>
            <div className="icone-Legumes">
                <button type="button" id={obj.ProdutoID} className="btn-Legumes" value={obj.productName} onClick={this.decrement}>-</button>
                <p className="p-btn-Legumes">{this.state.Legumes[obj.productName]}</p>
                <button type="button" className="btn-Legumes" value={obj.productName} onClick={this.increment}>+</button>
            </div>
            {
            this.state.Legumes[obj.productName]> 0? (
                    <div className="carrinho-Legumes">
                <button type="button"  className="btn-carrinho-Legumes" value={obj.preco} onClick={(e) => this.Carrinho(obj.preco,obj.ProdutoID)}>Adicionar ao Carrinho</button>
                </div>
            ) : ''
             }
            <div className="preco-Legumes">
                <h2>R${obj.preco.toString().replace(".", ",")}</h2>
            </div>    
        </li>
        );
    })} 
        </ul> {
        this.state.values.length===0? (
                    <div className="mensagem-Legumes">
                        <h1 className="h1-Legumes">FORA DE ESTOQUE</h1>
                </div>
            ) : ''
             }     
      </div>
      </React.Fragment>
}
} 