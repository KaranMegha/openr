import './App.css';

import MainPage from './components/MainPage';
import Aboutus from './components/Aboutus';
import Prize from './components/Prize';
import Faq from './components/Faq';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <div>
      <MainPage/>
      <Aboutus/>
      {/* <Sponsor/> */}
      <Prize/>
      <Faq/>
    </div>
  );
}

export default App;
