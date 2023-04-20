
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import MovieCard from './components/movie-card/movie-card';



function App() {
  return (
    <div className="App">
      <Container>
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
