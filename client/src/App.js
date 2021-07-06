import logo from './logo.svg';
import './App.css';
import store from './redux/Store'
import Post from './components/posts'
import { Provider } from 'react-redux'
import Home from './components/home'



function App() {
  return (
    <Provider store={store}>
    <div>
      <Post></Post>
      <Home></Home> 
    </div>
    </Provider>
  );
}

export default App;
