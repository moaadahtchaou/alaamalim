import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import SearchProperties from '../pages/SearchProperties';
import PropertyDetails from '../pages/PropertyDetails';
import AgencyServices from '../pages/AgencyServices';
import PropertyHunter from '../pages/PropertyHunter';
import AboutUs from '../pages/AboutUs';
import SpecialOffers from '../pages/SpecialOffers';
import Packages from '../pages/Packages';
import Rates from '../pages/Rates';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import PropertyManagement from '../pages/PropertyManagement';
import LoanCalculator from '../pages/LoanCalculator';
import PriceReference from '../pages/PriceReference';
import NewProperties from '../pages/NewProperties';
import FAQ from '../pages/FAQ';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/agence/rechercher-votre-bien', element: <SearchProperties /> },
      { path: '/agence/property/:id', element: <PropertyDetails /> },
      { path: '/agence', element: <AgencyServices /> },
      { path: '/chasseur-immobilier', element: <PropertyHunter /> },
      { path: '/qui-sommes-nous', element: <AboutUs /> },
      { path: '/speciales-offres', element: <SpecialOffers /> },
      { path: '/nos-packs', element: <Packages /> },
      { path: '/nos-tarifs', element: <Rates /> },
      { path: '/nos-services', element: <Services /> },
      { path: '/location-gerance', element: <PropertyManagement /> },
      { path: '/calcul-de-pret', element: <LoanCalculator /> },
      { path: '/referentiel-de-prix', element: <PriceReference /> },
      { path: '/immoneuf', element: <NewProperties /> },
      { path: '/le-blog', element: <Blog /> },
      { path: '/nous-contacter', element: <Contact /> },
      { path: '/questions-reponses', element: <FAQ /> },
      { path: '/politique-de-confidentialite', element: <PrivacyPolicy /> },
      { path: '/cgv', element: <Terms /> },
    ],
  },
]);
