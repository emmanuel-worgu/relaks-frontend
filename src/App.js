import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './statelessComponent/Home';
import CustomerLogin from './statefulComponent/CustomerLogin';
import HandymanLogin from './statefulComponent/HandymanLogin';
import CustomerRegister from './statefulComponent/CustomerRegister';
import BookJob from './statefulComponent/BookJob';
import CustomerDashboard from './statefulComponent/CustomerDashboard';
import CustomerForgotPassword from './statefulComponent/CustomerForgotPassword';
import Pricing from './statefulComponent/Pricing';
import HandymanDashboard from './statefulComponent/HandymanDashboard';
import HandymanForgotPassword from './statefulComponent/HandymanForgotPassword';
import VerifyCustomer from './statefulComponent/VerifyCustomer';
import HandymanRegister from './statefulComponent/HandymanRegister';
import VerifyHandyman from './statefulComponent/VerifyHandyman';
import Flutterwave from './statefulComponent/Flutterwave';
import NotFoundPage from './statelessComponent/404';
import ThankYouPage from './statelessComponent/ThankYouPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/customer' exact component = {CustomerDashboard} />
        <Route path = '/customer/login' component = {CustomerLogin} />
        <Route path = '/customer/Register' component = {CustomerRegister} />
        <Route path = '/customer/book-service' exact component = {BookJob} />
        <Route path = '/customer/book-service/confirm' exact component = {ThankYouPage} />                        
        <Route path = '/customer/forgot-password' exact component = {CustomerForgotPassword} />
        <Route path = '/customer/forgot-password/verify-user' component = {VerifyCustomer} />
        <Route path = '/customer/pricing' component = {Pricing} />
        <Route path = '/customer/pay' component = {Flutterwave} />
        <Route path = '/customer/thank-you' component = {ThankYouPage} />
        <Route path = '/handyman' exact component = {HandymanDashboard} />
        <Route path = '/handyman/login' component = {HandymanLogin} />
        <Route path = '/handyman/register' component = {HandymanRegister} />
        <Route path = '/handyman/forgot-password' exact component = {HandymanForgotPassword} />
        <Route path = '/handyman/forgot-password/verify-user' component = {VerifyHandyman} />
        <Route path = '/pay' component={Flutterwave} />
        <Route component = {NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
