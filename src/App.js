import React from 'react';
import useData from './hooks/useData';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import Info from './components/info/Info';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Languages from './components/languages/Languages';
import Loader from './components/loader/Loader';
import Footer from './components/footer/Footer';
import './App.css';
import myData from './utils/info.js';

function App() {
  const data = useData(myData);
  return data.length === 0 ? <Loader /> : (
    <div className="App">
      <Main>
        <Sidebar>
          <About
            avatar={data.avatar}
            name={data.name}
            profession={data.profession}
            bio={data.bio}
            address={data.address}
            email = {data.email}
            phone = {data.phone}
            social={data.social}
          />
        </Sidebar>
        <Info>
          <Education data={data.education} />
          <Experience data={data.experience} />
          <Skills data={data.skills} />
          <Languages data={data.languages} />
        </Info>
      </Main>
      <Footer />
    </div>
  );
}

export default App;