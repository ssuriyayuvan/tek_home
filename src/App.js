import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import Uploadcomponent from "./components/UploadComponent"
import TableComponent from './components/TableComponent'
import configureStore from './appRedux/store'

function App() {
  return (
    <div className="App">
      <Provider store={configureStore()} >
      <BrowserRouter>
      <Switch>
      <Route path='/table' component={TableComponent}  />
       <Route path='/' component={Uploadcomponent}/>
      </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
