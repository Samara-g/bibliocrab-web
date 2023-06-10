import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class MenuSistema extends React.Component{

   state = {
       activeItem: 'home'
   }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   render(){
       return(
           <>
               <Menu inverted>
                  
                   <Menu.Item
                       name='home'
                       active={this.state.activeItem === 'home'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/'
                   />
                         <Menu.Item
                       name='login'
                       active={this.state.activeItem === 'login'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/form-login'
                   />

                   <Menu.Item
                       name='cadastro'
                       active={this.state.activeItem === 'cadastro'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/form-cadastro'
                   />

                   <Menu.Item
                       name='assinatura'
                       active={this.state.activeItem === 'assinatura'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/form-assinatura'
                   />



                 <Menu.Item
                       name='recuperação de senha'
                       active={this.state.activeItem === 'recSenha'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/form-recSenha'
                   />

               </Menu>
           </>
       )
   }
}

export default MenuSistema;
