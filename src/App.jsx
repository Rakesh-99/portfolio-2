import React from 'react'
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
import persistStore from 'redux-persist/es/persistStore';
import Spinner from './components/spinner/Spinner';


const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));




const App = () => {

  return (
    <>
      <PersistGate persistor={persistStore(store)}>
        <Provider store={store}>
          <ScrollToTop />
          <ParticlesComponent />
          <ThemeProvider>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path='/' element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/resume' element={<Resume />} />
                </Route>
              </Routes>
            </Suspense>
          </ThemeProvider>
        </Provider>
        <Toaster />
      </PersistGate>



    </>
  )
}

export default App