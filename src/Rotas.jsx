import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormAssinatura from './views/assinatura/FormAssinatura';
import FormCadastro from './views/cadastro/FormCadastro';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';
import FormRecSenha from './views/rec_senha/FormRecSenha';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-login" element={ <FormLogin/> } />
                <Route path="form-cadastro" element={ <FormCadastro/> } />
                <Route path="form-assinatura" element={ <FormAssinatura/> } />
                <Route path="form-recSenha" element={ <FormRecSenha/> } />
            </Routes>
        </>
    )
}

export default Rotas
