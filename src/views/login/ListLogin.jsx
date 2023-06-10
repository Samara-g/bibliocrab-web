/*import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../util/constantes';

class ListLogin extends React.Component{

   state = {

       listaLogin: [],
       openModal: false,
       idRemover: null,

   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }

carregarLista = () => {

       axios.get(ENDERECO_API + "api/login")
       .then((response) => {
          
           this.setState({
               listaLogin: response.data
           })
       })

   };


   confirmaRemover = (id) => {

    this.setState({
        openModal: true,
        idRemover: id
         })  
    }
    
    setOpenModal = (val) => {

        this.setState({
            openModal: val
        })
   
    };
 
    remover = async () => {

        await axios.delete(ENDERECO_API + 'api/login/' + this.state.idRemover)
        .then((response) => {
   
        this.setState({ openModal: false })
        console.log('Login removido com sucesso.')
   
        axios.get(ENDERECO_API + "api/login")
        .then((response) => {
           
        this.setState({
        listaLogin: response.data

        })
    })
})
        .catch((error) => {
            this.setState({  openModal: false })
            console.log('Erro ao remover o login.')
        })
 };
 
   
render(){
       return(
           <div>

               <div style={{marginTop: '3%'}}>

                   <Container textAlign='justified' >

                       <h2> Login </h2>

                       <Divider /> 

                       <div style={{marginTop: '4%'}}>
                       <Link to={'/form-login'}>
                           <Button
                               inverted
                               circular
                               icon
                               labelPosition='left'
                               color='orange'
                               floated='right'
                           >
                               <Icon name='clipboard outline' />
                               Novo
                           </Button>
                           </Link>
 <br/><br/><br/>
                      
                           <Table color='orange' sortable celled>

                               <Table.Header>
                                   <Table.Row>
                                       <Table.HeaderCell>E-mail</Table.HeaderCell>
                                       <Table.HeaderCell>Senha</Table.HeaderCell>
                                 
                                       <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                   </Table.Row>
                               </Table.Header>
                          
                               <Table.Body>

                                   { this.state.listaLogin.map(login => (

                                       <Table.Row>
                                           <Table.Cell>{login.email}</Table.Cell>
                                           <Table.Cell>{login.senha}</Table.Cell>
                                           <Table.Cell textAlign='center'>
                                              
                                                                                      
                                           <Button
                                            inverted
                                            circular
                                            color='green'
                                            title='Clique aqui para editar os dados deste login'
                                            icon>
                                           <Link to="/form-login" state={{id: login.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                           </Button> &nbsp;

                                              <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este login'
                                                   onClick={e => this.confirmaRemover(login.id)} />

                                           </Table.Cell>
                                       </Table.Row>
                                       
                                   ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>

               <Modal
                   			basic
                   			onClose={() => this.setOpenModal(false)}
                   			onOpen={() => this.setOpenModal(true)}
                   			open={this.state.openModal}
               			>
                   			<Header icon>
                       				<Icon name='trash' />
                       				<div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
                   			</Header>
                   			<Modal.Actions>
                       				<Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                       					<Icon name='remove' /> Não
                       				</Button>
                       				<Button color='green' inverted onClick={() => this.remover()}>
                       					<Icon name='checkmark' /> Sim
                       				</Button>
                   			</Modal.Actions>
               			</Modal>
           </div>
       )
   }
}

export default ListLogin;
*/