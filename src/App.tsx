import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ObjectivePage from './pages/ObjectivePage';
import Contacts from './pages/Contacts';
import Projects from './pages/ProjectsPage';
import Project from './pages/Singlerage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='About' element={<AboutPage />}/>
          <Route path='Objective' element={<ObjectivePage />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='projects/:link' element={<Project />}/>
          <Route path='contacts' element={<Contacts />}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
