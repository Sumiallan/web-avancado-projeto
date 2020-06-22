import React, {Component}  from 'react';
import {Alert } from 'reactstrap';
import Helmet from 'react-helmet'
import '../../pages/Login/login.css'
export default class Login extends Component{
   
 

    constructor(props) {
        super(props)
        this.state = {
            message :'',
        };
    }

    signIn = () => {
            const data = { usuario: this.email, senha: this.password };
            const requestInfo = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json; charset=utf-8'
                }),
            };

            fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/loginusuario', requestInfo)
            .then(response => {
                console.log(response)
                if(response.ok) {
                    
                    return response.json()
                }
                throw new Error("Não foi possivel efetuar o login!"); 
            })
            .then(data =>{
                console.log(data)
                if(data.tipo===1) {
                    localStorage.setItem("login", JSON.stringify(this.email))
                    return this.props.history.push("/home")

                }
            })
            .catch(e => {
                console.log(e.message )
                this.setState({ message: e.message });
            }); 
    }

    render(){
        return(
                
        <div className="container">
            <Helmet title="Login" />
            <div className="p-5">
                <div className="img-div-Login">
                    <img className="img-Login" src="/Logo2teste.png" alt="Ifruit - A feira totalmente online"/> 
                </div>

                <form className="user" id="user">
                    <div className="form-group">
                        <input type="email" className="form-control form-control-user" onChange={e => this.email = e.target.value} id="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-user" onChange={e => this.password = e.target.value} id="password" placeholder="Senha" required/>
                    </div>	
                    {
                    this.state.message!== ''? (
                            <Alert color="danger" className="text-center"> {this.state.message}</Alert>
                        ) : ''
                    }
                    <button type="button" className="btn btn-primary btn-user btn-block" onClick={this.signIn}>Login</button>
                    <hr/>
                    <div className="text-center">
                        <a className="small" href="/registro">Crie uma Conta</a>
                    </div>
                </form>
            </div>
        </div>	
    

        )
    }
}