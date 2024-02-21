import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from '../Books/BookList';
import Register from '../Form/Register';
import { Provider } from 'react-redux';
import store from '../Redux/Store';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route 
            path='/'   
            element={<BookList />}>

        </Route>
        <Route 
            path='/register' 
            element={<Provider store={store}><Register/></Provider>}>
        </Route>
    </Routes>
    </div>
  );
}

export default AllRoutes;
