import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';

class Home extends React.Component{

    render(){
        return(
            <div>
                <div style={{marginTop: '5%'}}>
                    <Container>
                        <Grid columns={2} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <Image src='/bib-logo.png' size='large' />
                                </Grid.Column>
                                <Grid.Column>
                                    
                                   
                                  <strong>SEJA BEM-VINDO(A)</strong>

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;
