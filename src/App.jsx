import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import ParticlesComponent from './components/Particles';
import { persistStore } from 'redux-persist';  // ✅ named import
import Spinner from './components/spinner/Spinner';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Analytics } from '@vercel/analytics/react'

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));

const persistor = persistStore(store); 


const App = () => {

  return (
    <>
    <Analytics/>
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}> 
          <ScrollToTop />
          <ParticlesComponent />
          <ThemeProvider>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/about' element={<About />} />
                </Route>
              </Routes>
            </Suspense>
          </ThemeProvider>
          <Toaster />
        </PersistGate>
      </Provider>
      </ReactLenis>
      </>
  );
}

export default App;