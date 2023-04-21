
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import ButtonAppBar from './components/button-app-bar/button-app-bar';
import MovieCard from './components/movie-card/movie-card';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Container sx={{ marginY: 6 }}>
        <Grid container spacing={3}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
