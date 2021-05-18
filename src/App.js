import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Loading from './statelessComponent/Loading';

const Home = lazy(() => import('./statelessComponent/Home'));
const CustomerLogin = lazy(() => import('./statefulComponent/CustomerLogin'));
const HandymanLogin = lazy(() => import('./statefulComponent/HandymanLogin'));
const CustomerRegister = lazy(() => import('./statefulComponent/CustomerRegister'));
const BookJob = lazy(() => import('./statefulComponent/BookJob'));
const CustomerDashboard = lazy(() => import('./statefulComponent/CustomerDashboard'));
const CustomerForgotPassword = lazy(() => import('./statefulComponent/CustomerForgotPassword'));
const Pricing = lazy(() => import('./statefulComponent/Pricing'));
const HandymanDashboard = lazy(() => import('./statefulComponent/HandymanDashboard'));
const HandymanForgotPassword = lazy(() => import('./statefulComponent/HandymanForgotPassword'));
const VerifyCustomer = lazy(() => import('./statefulComponent/VerifyCustomer'));
const HandymanRegister = lazy(() => import('./statefulComponent/HandymanRegister'));
const VerifyHandyman = lazy(() => import('./statefulComponent/VerifyHandyman'));
const Flutterwave = lazy(() => import('./statefulComponent/Flutterwave'));
const HandymanFlutter = lazy(() => import('./statefulComponent/HandymanFlutter'));
const NotFoundPage = lazy(() => import('./statelessComponent/404'));
const ThankYouPage = lazy(() => import('./statelessComponent/ThankYouPage'));
const ContactUs = lazy(() => import('./statelessComponent/ContactUs'));
const CustomerJob = lazy(() => import('./statefulComponent/CustomerJob'));
const Review = lazy(() => import('./statefulComponent/Review'));
const JobList = lazy(() => import('./statefulComponent/JobList'));
const Settings = lazy(() => import('./statefulComponent/Settings'));
const RequestPayment = lazy(() => import('./statefulComponent/RequestPayment'));
const HandymanJob = lazy(() => import('./statefulComponent/HandymanJob'));
const PrivacyPolicy = lazy(() => import('./statelessComponent/PrivacyPolicy'));
const About = lazy (() => import('./statelessComponent/About'));
const TermsAndCondition = lazy(() => import('./statelessComponent/Terms'));
const ICA = lazy(() => import('./statelessComponent/ICA'));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/contact-us' component = {ContactUs} />
          <Route path = '/about' component = {About} />
          <Route path = '/privacy-policy' component={PrivacyPolicy} />
          <Route path = '/terms-condition' component = {TermsAndCondition} />
          <Route path = '/technician-agreement' component = {ICA} />
          <Route path = '/customer/' exact component = {CustomerDashboard} />
          <Route path = '/customer/job' component = {CustomerJob} />
          <Route path = '/customer/review' component={Review} />
          <Route path = '/customer/login' component = {CustomerLogin} />
          <Route path = '/customer/Register' component = {CustomerRegister} />
          <Route path = '/customer/setting' component = {Settings} />
          <Route path = '/customer/book-service' exact component = {BookJob} />
          <Route path = '/customer/book-service/confirm' exact component = {ThankYouPage} />                        
          <Route path = '/customer/forgot-password' exact component = {CustomerForgotPassword} />
          <Route path = '/customer/forgot-password/verify-user' component = {VerifyCustomer} />
          <Route path = '/customer/pricing' component = {Pricing} />
          <Route path = '/customer/pay' component = {Flutterwave} />
          <Route path = '/customer/thank-you' component = {ThankYouPage} />
          <Route path = '/handyman' exact component = {HandymanDashboard} />
          <Route path = '/handyman/job' component = {HandymanJob} />
          <Route path = '/handyman/accept-job' component = {JobList} />
          <Route path = '/handyman/login' component = {HandymanLogin} />
          <Route path = '/handyman/register' component = {HandymanRegister} />
          <Route path = '/handyman/request-payment' component = {RequestPayment} />
          <Route path = '/handyman/setting' component = {Settings} />
          <Route path = '/handyman/pay' component = {HandymanFlutter} />
          <Route path = '/handyman/forgot-password' exact component = {HandymanForgotPassword} />
          <Route path = '/handyman/forgot-password/verify-user' component = {VerifyHandyman} />
          <Route component = {NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
