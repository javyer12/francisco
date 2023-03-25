import './App.css';
import Home from './container/Home';
import Layout from './components/Layout/index';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
