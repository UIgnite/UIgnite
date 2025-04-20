import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import RootLayout from './_layout';
import PricingSection from './pages/PricingPage';
import ComponentLayout from './pages/components/_layout';
import {NotFoundPage} from './pages/NotFoundPage';
import ComponentPreviewPage from './pages/components';
// import TestCards from './pages/TestCards';
import FeedbackForm from './pages/FeedbackForm';
import {LandingPage} from './pages/templates/LandingPage';

import OurJourney from './pages/components/OurJourney';
import DashboardPage from './pages/templates/DashboardTemplate';
import HomePage from './pages/templates/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/templates" element={<HomePage/>} />
      <Route path="/templates/landing" element={<LandingPage />} />
      <Route path="/templates/dashboard" element={<DashboardPage />} />

      <Route element={<RootLayout />}>
        <Route path="feedback" element={<FeedbackForm />} />
        <Route path="/docs" element={<Landing />} />
        {/* <Route path="/testcards" element={<TestCards />} /> */}

        <Route path="/journey" element={<OurJourney />}></Route>
        <Route element={<ComponentLayout />}>
          <Route path="/components/" element={<ComponentPreviewPage />} />
          <Route
            path="/components/:componentId"
            element={<ComponentPreviewPage />}
          />
        </Route>
        <Route path="/pricing" element={<PricingSection />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
