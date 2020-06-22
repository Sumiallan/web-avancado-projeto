import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import MenuCliente from './pages/MenuCliente/index';
import Registro from './pages/Registro/Registro';
import Frutas from './pages/MenuCliente/Frutas'
import Carrinho from './pages/MenuCliente/Carrinho'
import Home from './pages/MenuCliente/Home'
import PedidosCliente from './pages/MenuCliente/PedidosCliente';
import Verduras from './pages/MenuCliente/Verduras';
import Legumes from './pages/MenuCliente/Legumes';
import Kits from './pages/MenuCliente/Kits';
import MinhaConta from './pages/MenuCliente/MinhaConta';
const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/cliente" component={MenuCliente} />
            <Route path="/registro" component={Registro} />
            <Route path="/frutas" component={Frutas} />
            <Route path="/verduras" component={Verduras} />
            <Route path="/legumes" component={Legumes} />
            <Route path="/kits" component={Kits} />
            <Route path="/carrinho" component={Carrinho} />
            <Route path="/minhaconta" component={MinhaConta} />
            <Route path="/home" component={Home} />
            <Route path="/pedidoscliente" component={PedidosCliente} />
        </Switch>
    </Router>
);

export default Routes;