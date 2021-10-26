import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NewCigar from './NewCigar';
import Rating from '../rating/Rating';

type CigarProps = {
 	token: string;
}

type CigarState = {
    showCreate: boolean 
}

export default class CigarIndex extends React.Component<CigarProps, CigarState> {
    constructor(props: CigarProps){
        super(props)
        this.state = {
            showCreate: false
        }
    }
    closeCreate = () => {
        this.setState({showCreate: false})
    }
    render () {
        return (
            <Box>
                <Container>
                    <Grid>
                        <Box>
                            {this.state.showCreate &&
                                <NewCigar closeCreate={this.closeCreate} token={this.props.token} />
                            }
                            <button onClick={() => this.setState({ showCreate: !this.state.showCreate})}> New cigar </button>
                        </Box>
                        <hr/>
                        <Box>
                            <Rating />
                        </Box>
                    </Grid>
                </Container>
            </Box>
        )
    };
};






           