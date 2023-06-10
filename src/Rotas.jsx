import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormCadastro from './views/cadastro/FormCadastro';
import FormComprador from './views/comprador/FormComprador';
import ListComprador from './views/comprador/ListComprador';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-comprador" element={ <ListComprador/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-login" element={ <FormLogin/> } />
                <Route path="form-cadastro" element={ <FormCadastro/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="form-comprador" element={ <FormComprador/> } />
            </Routes>
        </>
    )
}

export default Rotas
