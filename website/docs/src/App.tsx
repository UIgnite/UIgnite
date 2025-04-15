import {Test} from './pages/Test';
import {Route, Routes} from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Landing from './pages/Landing';
import RootLayout from './_layout';
import Components from './pages/Component';
import PricingSection from './pages/PricingPage';
import ComponentLayout from './pages/components/_layout';
import {NotFoundPage} from './pages/NotFoundPage';
import ComponentPreviewPage from './pages/components';

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Landing />} />
        <Route path="/test" element={<Test />} />
        <Route element={<ComponentLayout />}>
          <Route path="/components/" element={<ComponentPreviewPage />} />
          <Route
            path="/components/:componentId"
            element={<ComponentPreviewPage />}
          />
        </Route>
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="fullontesting" element={<Components />} />
      </Route>
    </Routes>
  );
};

export default App;
