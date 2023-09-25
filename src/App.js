// import logo from './logo.svg';
// import './App.css';
import Header from'./Header';
import {Image, Imagepic} from './Image';
import Form from './Form';
import Footer from './Footer';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header />
          <Image /> <Imagepic />
          <Form /> <br/>
          <Profile />
          <Footer />       

    </div>
  );
}
export default App;
