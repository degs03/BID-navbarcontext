import './App.css';
import Wrapper from './Components/Wrapper'
import Navbar from './Components/Navbar'
import FormWrapper from './Components/FormWrapper'
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  return (
    <Wrapper.Provider value = {{name, setName}}>
        <Navbar/>
        <FormWrapper/>
    </Wrapper.Provider>
);
}

export default App;
