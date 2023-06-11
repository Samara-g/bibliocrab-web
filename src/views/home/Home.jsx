import React from "react";
import { Button, Container, Grid, Image } from 'semantic-ui-react';

class Home extends React.Component{

    render(){
        return(
            <div>
                <div style={{marginTop: '1%'}}>
                    <Container>
                        
                            <Grid.Row>
                                <Grid.Column>
                                    <Image src='/bib-logo.png' height="400" width="700"/>
                                </Grid.Column>
                                <Grid.Column>
                                    <header>
                                    
                                        <p id="conheca">Conheça-nos</p>
                                        <Button id="saiba">Ver Mais</Button>
                                    </header>
                                    <p id="servicos">Serviços que oferecemos</p>
                                </Grid.Column>
                            </Grid.Row>
                      
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;