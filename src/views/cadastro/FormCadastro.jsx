import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../util/constantes";

export default function FormCadastro () {

	const [idCadastro, setIdCadastro] = useState();
const [nome, setNome] = useState();
const [dataNasc, setDataNasc] = useState();
const [cpf, setCpf] = useState();
const [rg, setRg] = useState();
const [foneCel, setFoneCel] = useState();
const [endereco, setEndereco] = useState();
const [criarSenha, setCriarSenha] = useState();



const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get(ENDERECO_API + "api/cadastro/" + state.id)
    .then((response) => {
	setIdCadastro(response.data.id)
    setNome(response.data.nome)
	setDataNasc(formatarData(response.data.dataNasc))
	setCpf(response.data.cpf)
	setRg(response.data.rg)
	setFoneCel(response.data.foneCel)
	setEndereco(response.data.endereco)
	setCriarSenha(response.data.criarSenha)


		})
	}
   }, [state])


	function salvar () {

		let cadastroRequest = {

			nome:nome,
			dataNasc:dataNasc,
			cpf:cpf,
			rg:rg,
			foneCel:foneCel,
			endereco:endereco,
			criarSenha:criarSenha,
		}

		if (idCadastro != null) { //Alteração:
			axios.put(ENDERECO_API + "api/cadastro/" + idCadastro, cadastroRequest)
			.then((response) => { console.log('cadastro alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o cadastro.') })
		} else { //Cadastro:
			axios.post(ENDERECO_API + "api/cadastro", cadastroRequest)
			.then((response) => { console.log('Login cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o login.') })
		}
 
	}

	function formatarData(dataParam) {

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    }
	

        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

					{ idCadastro === undefined &&
                  <h2> <span style={{color: 'orange'}}> Cadastro &nbsp;</span></h2>
                       }
                 


                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome:'
										value={nome}
										onChange={e => setNome(e.target.value)}
									
									/>
						
						<Form.Input
									fluid
									label='Data de Nascimento:'
								
								>
									<InputMask 
										mask="99/99/9999" 
										maskChar={null}
										placeholder="Ex: 20/03/1985"
										value={dataNasc}
										onChange={e => setDataNasc(e.target.value)}
									/> 
								</Form.Input>
									</Form.Group>
									<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='CPF'
										value={cpf}
										onChange={e => setCpf(e.target.value)}
									
									/>
						
		                            <Form.Input
										required
										fluid
										label='RG:'
										value={rg}
										onChange={e => setRg(e.target.value)}
									
									/>
									</Form.Group>
                                   <Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Fone Celular:'
										value={foneCel}
										onChange={e => setFoneCel(e.target.value)}
									
									/>
						
		                            <Form.Input
										required
										fluid
										label='Endereço:'
									
										value={endereco}
										onChange={e => setEndereco(e.target.value)}
									
									/>
									<Form.Input
										required
										fluid
										label='Criar Senha:'
										type ="password" id = "pass" name="password" minlenght="8"
										value={criarSenha}
										onChange={e => setCriarSenha(e.target.value)}
										placeholder="No mínimo 8 caracteres"
									
									/>

									
									</Form.Group>
								 

								
								

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>
									
								<Link to={'/'}>
									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'>
										<Icon name='reply' />
										Voltar
									
									</Button>
									</Link>
									<Container textAlign='right'>
										<Link to={"/form-assinatura"}>
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
										>
											<Icon name='save' />
											Próximo
										</Button>
										</Link>
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}


