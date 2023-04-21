import { Box, Card, createTheme, ThemeProvider, Grid, Link, Rating, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [ // here we say that for prop variant that equals body2 we add the following styles. Card component is later wrapped in ThemeProvider and theme as props 
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 14
          }
        }
      ]
    }
  }
})

const MovieCard = () => {
  return <Grid item xs={3} >
    <ThemeProvider theme={theme}>
      <Card>
        <Link href="#" sx={{
          color: "#000000",
          textDecoration: "none"
        }}>
          <Box padding={1}>
            <Typography variant="h5" component="h4" >Sex and the City</Typography>
            <img src="https://ex-fs.net/uploads/posts/2015-01/1422289660_b88e9d6b26.jpg" alt="sex and the city" className='img' />
          </Box>
          <Typography padding={1} component="p" sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: 0
          }} variant="body2">
            <AccessTimeIcon sx={{
              marginRight: "6px"
            }} />
            30 min
            <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" sx={{
              marginLeft: "auto"
            }} />
          </Typography>
        </Link>
      </Card>
    </ThemeProvider>
  </Grid >
};

export default MovieCard;
