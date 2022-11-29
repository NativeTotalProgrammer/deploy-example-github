import { CounterComponent } from './components/Counter/CounterFile.jsx';

function App() {
  return (
    <div className="App">
      <CounterComponent
        counterText='Counter 1'
      />
      <CounterComponent 
        counterText='Counter 2'
      />
      <CounterComponent 
        counterText='Counter 3'
      />
      <CounterComponent 
        counterText='Counter 4'
      />
      <CounterComponent 
        counterText='Counter 5'
      />
    </div>
  );
}

export default App;
