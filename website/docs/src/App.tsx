import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import PricingSection from './pages/PricingPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {RootLayout} from './pages/_layout';

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
