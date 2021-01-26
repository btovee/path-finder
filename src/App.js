import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import PathFindingVisualizer from "./path-finding-visualizer/path-finding-visualizer";

function App() {
  return (
      <>
          <CssBaseline />
          <Container>
              <div className="App">
                  <PathFindingVisualizer/>
              </div>
          </Container>
      </>
  );
}

export default App;
