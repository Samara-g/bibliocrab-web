import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../util/constantes";

export default function FormAssinatura () {

	const [idAssinatura, setIdAssinatura] = useState();
const [cartao, setCartao] = useState();
const [numCart, setNumCart] = useState();
const [validade, setValidade] = useState();
const [cvv, setCvv] = useState();
const [titularNom, setTitularNom] = useState();



const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get(ENDERECO_API + "api/cadastro/" + state.id)
    .then((response) => {
	setIdAssinatura(response.data.id)
    setNumCart(response.data.numCart)
	setCartao(response.data.cartao)
	setValidade(formatarData(response.data.validade))
	setCvv(response.data.cvv)
	setTitularNom(response.data.titularNom)
		})
	}
   }, [state])


	function salvar () {

		let assinaturaRequest = {

			cartao:cartao,
			numCart:numCart,
			validade:validade,
			cvv:cvv,
			titularNom:titularNom,
		}

		if (idAssinatura != null) { //Alteração:
			axios.put(ENDERECO_API + "api/assinatura/" + idAssinatura, assinaturaRequest)
			.then((response) => { console.log('assinatura alterada com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar a assinatura.') })
		} else { //Cadastro:
			axios.post(ENDERECO_API + "api/assinatura", assinaturaRequest)
			.then((response) => { console.log('assinatura cadastrada com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir a assinatura.') })
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

					{ idAssinatura === undefined &&
                  <h2> <span style={{color: 'orange'}}> Assinatura &nbsp;</span></h2>
                       }
                 


                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

								<Form.Input
										required
										fluid
										label='Nome do Titular:'
										value={titularNom}
										onChange={e => setTitularNom(e.target.value)}
										placeholder="Nome presente no cartão"
									
									/>

									<Form.Input
										required
										fluid
										label='Número do Cartão:'
										value={numCart}
										onChange={e => setNumCart(e.target.value)}
									
									/>
						
						
									</Form.Group>
									<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='CVV'
										value={cvv}
										onChange={e => setCvv(e.target.value)}
										placeholder="Ex: 123"
									
									/>
						
						           <Form.Input
									fluid
									label='Data de Validade:'
								
								>
									<InputMask 
										mask="99/99/9999" 
										maskChar={null}
										placeholder="Ex: 20/03/1985"
										value={validade}
										onChange={e => setValidade(e.target.value)}
									/> 
								   </Form.Input>
									</Form.Group>
                                  

									<Form.Group inline>
									

									<label>Forma de Pagamento: </label>
									

									<Form.Radio
									label='Crédito'
									checked={cartao}
									onChange={e => setCartao(true)}
								/>
								
								<Form.Radio
									label='Débito'
									checked={!cartao}
									onChange={e => setCartao(false)}
								/>
								</Form.Group>
								

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>
									
								<Link to={'/form-cadastro'}>
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


