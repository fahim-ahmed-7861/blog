import logo from './logo.svg';
import './App.css';
import LoadPost from './Components/LoadPost/LoadPost';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
   

      <Provider store={store}>

      <LoadPost></LoadPost>

      </Provider>
    </div>
  );
}

export default App;
