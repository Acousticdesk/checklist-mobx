import './App.css';
import Checklist from './components/Checklist';
import checklist from './mocks/checklist.json'

function App() {
  return (
    <div className="App">
      <Checklist checklist={checklist} />
    </div>
  );
}

export default App;
