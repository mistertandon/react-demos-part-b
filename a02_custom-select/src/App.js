import { useState } from 'react';
import './App.css';
import CustomSelect from './components/CustomSelect';

function App() {
  const selectOptions = [
    {
      title: 'One',
      value: 1,
    },
    {
      title: 'Two',
      value: 2,
    },
    {
      title: 'Three',
      value: 3,
    },
    {
      title: 'Four',
      value: 4,
    },
    {
      title: 'Five',
      value: 5,
    }
  ];

  const defaultOption = { title: 'Select Option', value: '' };

  const [selectFieldAgeError, setSelectFieldAgeError] = useState(false);

  return (
    <div className="app--container">
      <header className="App-header">

      </header>
      <div className='child-a--ac'>
        <CustomSelect selectOptions={selectOptions}
          defaultOption={defaultOption}
          fieldErrorStatus={selectFieldAgeError}
          setFieldErrorStatus={setSelectFieldAgeError}
        />
      </div>

      <div>
        Hello
      </div>

    </div>
  );
}

export default App;
