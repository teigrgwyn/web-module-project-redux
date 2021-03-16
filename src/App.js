import React, { useReducer } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import reducer, { initialState } from './reducers/index';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = createStore(reducer);

  return (
    <Provider store={store}>

    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>

    </Provider>
  );
};

export default App;
