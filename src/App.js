import './App.css';
import img from './Image/top.jpg';
import avt from './Image/img.png';
import Cards from './components/Cards';

function App() {
  return (
    <Cards 
      img={img}
      title="Supercharged !"
      content="The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on..."
      avt={avt}
      name="Jean Jacques"
      time="20 mars 2029 - 6 min read"
    />
  );
}

export default App;
