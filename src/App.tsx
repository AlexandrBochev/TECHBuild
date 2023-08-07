import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Certificates from './pages/Certificates';
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
          <Route path='gallery' element={<Gallery />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='projects/:link' element={<Project />}/>
          <Route path='certificates' element={<Certificates />}/>
          <Route path='contacts' element={<Contacts />}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
