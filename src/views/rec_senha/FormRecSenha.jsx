import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../util/constantes';

export default function FormRecSenha () {

	const { state } = useLocation();

	const [idRecSenha, setIdRecSenha] = useState();
	const [email, setEmail] = useState();
	const [novaSenha, setNovaSenha] = useState();
	const [confSenha, setConfSenha] = useState();


	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get(ENDERECO_API + "api/recSenha/" + state.id)
			.then((response) => {
				setIdRecSenha(response.data.id)
				setEmail(response.data.email)
				setNovaSenha(response.data.novaSenha)
				setConfSenha(response.data.confSenha)
			})
		}
		
	}, [state])

	function salvar() {

		let recSenhaRequest = {

			email: email,
			novaSenha: novaSenha,
			confSenha: confSenha,
		}

		if (idRecSenha != null) { //Alteração:

			axios.put(ENDERECO_API + "api/recSenha/" + idRecSenha, recSenhaRequest)
			.then((response) => { console.log('Senha alterada com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar a senha.') })

		} else { //Cadastro:
			
			axios.post(ENDERECO_API + "api/recSenha", recSenhaRequest)
			.then((response) => { console.log('Senha cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir a senha.') })
		}
	 }
	
	return(
		<div>

			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

				{ idRecSenha === undefined &&
                  <h2> <span style={{color: 'orange'}}> Recuperação de Senha &nbsp;</span></h2>
                       }

					<Divider />

					<div style={{marginTop: '4%'}}>

						<Form>

							<Form.Group widths='equal'>

								<Form.Input
									required
									fluid
									label='E-mail'
									maxLength="100"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>

							</Form.Group>
							
							<Form.Group widths='equal'>

							<Form.Input
									required
									fluid
									label='Nova Senha'
									type ="password" id = "pass" name="password" minlenght="8"
									maxLength="100"
									value={novaSenha}
									onChange={e => setNovaSenha(e.target.value)}
									placeholder="No mínimo 8 caracteres"
								/>


							</Form.Group>
							<Form.Group widths='equal'>
							<Form.Input
									required
									fluid
									label='Confirme a senha'
									type ="password" id = "pass" name="password" minlenght="8"
									maxLength="100"
									value={confSenha}
									onChange={e => setConfSenha(e.target.value)}
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