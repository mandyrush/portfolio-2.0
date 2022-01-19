import './App.css';
import appState from './state.json';
import { useState, useEffect } from 'react';

import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Footer from './Components/Footer';

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(appState)
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <Skills
          competencies={state.competencies}
          proficiencies={state.proficiencies}
        />
        <Portfolio projects={state.projects} />
        <Experience experience={state.experience} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
