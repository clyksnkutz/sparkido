import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';


// Home Pages Import
import CorporateAgency from './pages/CorporateAgency';
import CreativeAgency from './pages/CreativeAgency';
import DigitalAgency from './pages/DigitalAgency';
import HomeStartup from './pages/HomeStartup';
import PersonalPortfolio from './pages/PersonalPortfolio';
import Sparkiedo from './pages/Sparkiedo';
import SmartPanel from './pages/SmartPanel';

// Blog Import
import BlogArchive from './pages/Archive';
import BlogDetails from './pages/BlogDetails';
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';

// Service 
import ServiceDetails from './pages/ServiceDetails';
import ServiceOne from './pages/ServiceOne';
import ServiceTwo from './pages/ServiceTwo';

// Project 
import ProjectDetails from './pages/ProjectDetails';
import ProjectGridFive from './pages/ProjectGridFive';
import ProjectGridFour from './pages/ProjectGridFour';
import ProjectGridOne from './pages/ProjectGridOne';
import ProjectGridThree from './pages/ProjectGridThree';
import ProjectGridTwo from './pages/ProjectGridTwo';

// Pages 
import ErrorPage from './pages/404';
import AboutUs from './pages/AboutUs';
import CaseStudy from './pages/CaseStudy';
import CaseDetails from './pages/CaseStudyDetails';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import OurClients from './pages/OurClients';
import OurOffice from './pages/OurOffice';
import PricingTable from './pages/PricingTable';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import TermsOfUse from './pages/TermsOfUse';
import Testimonials from './pages/Testimonials';
import Typography from './pages/Typography';

// Css Import
import './assets/scss/app.scss';



const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<Sparkiedo />}/>

				<Route path={process.env.PUBLIC_URL + "/digital-agency"} element={<DigitalAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/creative-agency"} element={<CreativeAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/personal-portfolio"} element={<PersonalPortfolio />}/>
				<Route path={process.env.PUBLIC_URL + "/home-startup"} element={<HomeStartup />}/>
				<Route path={process.env.PUBLIC_URL + "/smart-panel"} element={<SmartPanel />}/>
				<Route path={process.env.PUBLIC_URL + "/corporate-agency"} element={<CorporateAgency />}/>

				{/* Blogs */}
				<Route path={process.env.PUBLIC_URL + "/blog-grid/"} element={<BlogGridView />}/>
				<Route path={process.env.PUBLIC_URL + "/category/:slug"} element={<BlogCategory />}/>
				<Route path={process.env.PUBLIC_URL + "/archive/:slug"} element={<BlogArchive />}/>
				<Route path={process.env.PUBLIC_URL + "/blog-details/:id"} element={<BlogDetails />}/>

				{/* Service */}
				<Route path={process.env.PUBLIC_URL + "/service-one/"} element={<ServiceOne />}/>
				<Route path={process.env.PUBLIC_URL + "/service-two/"} element={<ServiceTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/service-details/:slug"} element={<ServiceDetails />}/>
		
				{/* Project  */}
				<Route path={process.env.PUBLIC_URL + "/project-grid-one"} element={<ProjectGridOne />}/>
				<Route path={process.env.PUBLIC_URL + "/project-grid-two"} element={<ProjectGridTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/project-grid-three"} element={<ProjectGridThree />}/>
				<Route path={process.env.PUBLIC_URL + "/project-width-one"} element={<ProjectGridFour />}/>
				<Route path={process.env.PUBLIC_URL + "/project-width-two"} element={<ProjectGridFive />}/>
				<Route path={process.env.PUBLIC_URL + "/project-details/:slug"} element={<ProjectDetails />}/>

				{/* Pages  */}
				<Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/our-office"} element={<OurOffice />}/>
				<Route path={process.env.PUBLIC_URL + "/our-clients"} element={<OurClients />}/>
				<Route path={process.env.PUBLIC_URL + "/team"} element={<Team />}/>
				<Route path={process.env.PUBLIC_URL + "/team-details/:slug"} element={<TeamDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/case-study"} element={<CaseStudy />}/>
				<Route path={process.env.PUBLIC_URL + "/case-details/:slug"} element={<CaseDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/testimonials"} element={<Testimonials />}/>
				<Route path={process.env.PUBLIC_URL + "/pricing-table"} element={<PricingTable />}/>
				<Route path={process.env.PUBLIC_URL + "/typography"} element={<Typography />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
				<Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/>
				<Route path={process.env.PUBLIC_URL + "/coming-soon"} element={<ComingSoon />}/>
				<Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />}/>
				<Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
