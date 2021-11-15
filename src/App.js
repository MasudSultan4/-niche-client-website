import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddCar from './Pages/DashBoard/AddCar/AddCar';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders/ManageAllOrders';
import ManageProduct from './Pages/DashBoard/ManageProduct/ManageProduct';
import MyOrders from './Pages/DashBoard/MyOrders/MyOrders';
import Payment from './Pages/DashBoard/Payment/Payment';
import Review from './Pages/DashBoard/Review/Review';
import Allcars from './Pages/Home/Allcars/Allcars';
import AllReview from './Pages/Home/AllReview/AllReview';
import CarDetails from './Pages/Home/CarDetails/CarDetails';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LogIn/Login/Login';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Register from './Pages/LogIn/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
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
          <PrivateRoute path="/carDetails/:productId">
            <CarDetails></CarDetails>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/addReview">
            <Review></Review>
          </Route>
          <Route path="/admin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route exact path="/addCar">
            <AddCar></AddCar>
          </Route>
          <Route  path="/reviews">
            <AllReview></AllReview>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
