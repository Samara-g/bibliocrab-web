import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../util/constantes";

export default function FormLogin () {

	const [idLogin, setIdLogin] = useState();
const [email, setEmail] = useState();
const [senha, setSenha] = useState();


const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get(ENDERECO_API + "api/login/" + state.id)
    .then((response) => {
	setIdLogin(response.data.id)
    setEmail(response.data.email)
	setSenha(response.data.senha)
		})
	}
   }, [state])


	function salvar () {

		let loginRequest = {

			email:email,
			senha:senha,
		}

		if (idLogin != null) { //Alteração:
			axios.put(ENDERECO_API + "api/login/" + idLogin, loginRequest)
			.then((response) => { console.log('Login alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter o login.') })
		} else { //Cadastro:
			axios.post(ENDERECO_API + "api/login", loginRequest)
			.then((response) => { console.log('Login cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o login.') })
		}
 
	}
	

        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

					{ idLogin === undefined &&
                  <h2> <span style={{color: 'orange'}}> Login &nbsp;</span></h2>
                       }
                 


                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='E-mail'
										
										value={email}
										onChange={e => setEmail(e.target.value)}
									
									/>
						
		                            <Form.Input
										required
										fluid
										label='Senha'
									
										value={senha}
										onChange={e => setSenha(e.target.value)}
									
									/>
									</Form.Group>

					
								

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>
									
								<Link to={'/list-login'}>
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
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={() => salvar()}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}


