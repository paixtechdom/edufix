import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { logo_transparent } from './assets/Constants';
import AboutPage from './pages/about/page';
import CreateHivePage from './pages/skill/createhive/page';
import MycelialPage from './pages/skill/mycelial/page';
import MillionairePage from './pages/skill/millionaire/page';
import BecomePage from './pages/become/page';

const Navbar = lazy(() => import('./assets/components/Navbar'))
const Footer = lazy(() => import('./assets/components/Footer'))
const HomePage = lazy(() => import("./pages/home/page"))
const ContactPage = lazy(() => import("./pages/contact/page"))



export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<FallbackComponent />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/programs/createhive" element={<CreateHivePage />}/>
                        <Route path="/programs/mycelial-network" element={<MycelialPage />}/>
                        <Route path="/programs/millionaire-mind" element={<MillionairePage />}/>
                        <Route path="/become-a-createhive" element={<BecomePage />}/>
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path="/about" element={<AboutPage />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };


  const FallbackComponent = () => {
    return(
        <section className='center flex-col gap-2 h-screen w-full bg-bg'>
            <img src={logo_transparent} alt="" className="w-3/12 animate-pulse"/>
        </section>
    )
  }