
import { Container } from '@mui/system';
import ButtonAppBar from './components/button-app-bar/button-app-bar';
import List from './components/list/list';
import './App.css';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Container sx={{ marginY: 6 }}>
        <List />
      </Container>
    </div>
  );
}

export default App;
