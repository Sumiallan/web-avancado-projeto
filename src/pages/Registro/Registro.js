import React, {Component}  from 'react';
import {Alert } from 'reactstrap';
import Helmet from 'react-helmet'
import '../../pages/Registro/Registro.css'
export default class Registro extends Component{
   
    constructor(props) {
        super(props)
        this.state = {
            message :'',
        };
    }

    signUp = () => {
            const data = { usuario: this.email, senha: this.password, Pnome: this.Fname, Unome: this.Lname, tipo: 1 };
            const requestInfo = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
            };

            fetch('http://www2.tinus.com.br/csp/testeoli/ifruit/api/criausuario', requestInfo)
            .then(response => {
                if(response.ok) {
                    console.log(response)
                    return response.json()
                }
                
            })
            .then(data =>{
                console.log(data.resposta)
                if(data.resposta!=="") {
                    throw new Error(data.resposta);  
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
           <Helmet title="Registro" />   
            <div className="p-5">
            <div className="img-div-Login">
                    <img className="img-Login" src="/Logo2teste.png" alt="Ifruit - A feira totalmente online"/> 
            </div>
            <form className="user" id="user">
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" className="form-control form-control-user" id="exampleFirstName" onChange={e => this.Fname = e.target.value} placeholder="Primeiro Nome" required/>
                  </div>
                  <div className="col-sm-6">
                    <input type="text" className="form-control form-control-user" id="exampleLastName" onChange={e => this.Lname = e.target.value} placeholder="Ultimo Nome" required/>
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-user" id="exampleInputEmail" onChange={e => this.email = e.target.value} placeholder="Endereço de Email" required/>
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" onChange={e => this.password = e.target.value} placeholder="Senha" required/>
                  </div>
                  <div className="col-sm-6">
                    <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" onChange={e => this.password2 = e.target.value} placeholder="Repetir Senha" required/>
                  </div>
                </div>
                {
                this.state.message!== ''? (
                            <Alert color="danger" className="text-center"> {this.state.message}</Alert>
                        ) : ''
                }	
                <button type="button" className="btn btn-primary btn-user btn-block" onClick={this.signUp}>Registrar conta</button>
                 <hr/>
                  <div className="text-center">
                    <a className="small" href="/">Já tem uma conta? Login!</a>
                  </div>
             </form>
             </div>
        </div>
        )
    }
}