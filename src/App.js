
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import CalculatorComponent from './container/CalculatorComponent';

function App() {
  return (

    <Provider store={store}>
  <CalculatorComponent/>
    </Provider>
      
  );
}

export default App;
