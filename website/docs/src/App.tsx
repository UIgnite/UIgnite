import {Route, Routes} from 'react-router-dom';
import Home from '../../../website/docs/src/pages/Home';
import PricingSection from '../../../website/docs/src/pages/PricingPage';
import {NotFoundPage} from '../../../website/docs/src/pages/NotFoundPage';
import {RootLayout} from '../../../../UIgnite/packages/uignite/src/Layout/_layout'

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
