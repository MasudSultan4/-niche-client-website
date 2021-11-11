import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddCar from './Pages/DashBoard/AddCar/AddCar';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Allcars from './Pages/Home/Allcars/Allcars';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LogIn/Login/Login';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Register from './Pages/LogIn/Register/Register';
import Footer from './Sheard/Footer/Footer';
import Header from './Sheard/Header/Header';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/explore">
            <Allcars></Allcars>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route exact path="/addcar">
            <AddCar></AddCar>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
