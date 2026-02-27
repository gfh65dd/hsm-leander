// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // Import Layout Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop'; // 👈 import this

// // Import Page Components
// import Home from '../src/pages/Home';
// import AboutPage from '../src/pages/About';
// import MenuPage from '../src/pages/Menu';
// import GalleryPage from '../src/pages/Gallery';
// import ContactPage from '../src/pages/Contact';
// import CateringPage from './components/CateringPage';
// import Specials from './pages/Specials';
// import AdminSpecials from './pages/AdminSpecials';

// /**
//  * The main application component.
//  * It sets up the router and defines the structure of the multi-page site.
//  * The Navbar and Footer are present on all pages.
//  */
// function App() {
//   return (
//     <div className="bg-[#0a192f] text-gray-300 font-sans">
//       <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
//         <ScrollToTop /> {/* 👈 Add this line to scroll to top on route change */}
//         <Navbar />
//         {/* The main content area will be padded to avoid being hidden by the fixed navbar */}
//         <main className="pt-20">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/menu" element={<MenuPage />} />
//             <Route path="/gallery" element={<GalleryPage />} />
//             <Route path="/contact" element={<ContactPage />} />

//             <Route path="/specials" element={<Specials />} />

//             <Route path="/admin-events" element={<AdminSpecials />} />


//             <Route path='/catering' element={<CateringPage/>}/>
//           </Routes>
//         </main>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Page Components
import Home from './pages/Home';
import AboutPage from './pages/About';
import MenuPage from './pages/Menu';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import CateringPage from './components/CateringPage';
import Specials from './pages/Specials';

// Import Admin Components
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

/**
 * Helper component to handle conditional layout (Navbar/Footer)
 */
function AppContent() {
  const location = useLocation();

  // Define paths where we DON'T want the public Navbar and Footer
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className="bg-[#0a192f] text-gray-300 font-sans min-h-screen">
      <ScrollToTop />

      {/* Only show Navbar if NOT in admin pages */}
      {!isAdminPath && <Navbar />}

      <main className={!isAdminPath ? "pt-20" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/catering" element={<CateringPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Redirect or 404 could go here */}
        </Routes>
      </main>

      {/* Only show Footer if NOT in admin pages */}
      {!isAdminPath && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;