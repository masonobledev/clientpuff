import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Footer () {
    return 
    <footer>
        <Box 
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor="text.secondary" 
            color="white"
            >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                
            </Container>
        </Box>

    </footer>;
}