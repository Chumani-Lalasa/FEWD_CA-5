import { Provider } from 'react-redux'
import './App.css'
import store from './Redux/Store'
import { BrowserRouter} from 'react-router-dom'
import AllRoutes from './Routes/AllRoutes'

function App() {

  return (
    // <Provider store={store}>
    //   <BookList />
    //   <Register />
    // </Provider>
    <Provider store={store}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
