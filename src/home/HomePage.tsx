import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
// import myCarousel from './carousel/myCarousel';
import Welcome from './Welcome';
import QuickLinks from './QuickLinks';
import CigarIndex from '../cigars/CigarIndex';
import AllCigars from "../cigars/AllCigars";


type HomeProps = {
    token: string
}

export default class HomePage extends React.Component <HomeProps, {}> {
    render (){
        return (
        <Box>
            <Container>
                <Grid>
                    <Box>

                    </Box>
                    <Box>
                        <Welcome />
                    </Box>
                    <hr />
                    <Box>
                    <CigarIndex token={this.props.token} />
                    </Box>
                    <hr />
                    <Box>
                    <AllCigars token={this.props.token} />
                    </Box>
                    <hr />
                    <Box>
                    <QuickLinks />
                    </Box>
                    <hr />
                </Grid>
            </Container>
        </Box>    
        )
    };
};
