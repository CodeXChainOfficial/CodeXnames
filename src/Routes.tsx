import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SolnamesSubdomainCheckout = React.lazy(
  () => import("pages/SolnamesSubdomainCheckout"),
);
const SolnamesChooseSubdomainWalletwith = React.lazy(
  () => import("pages/SolnamesChooseSubdomainWalletwith"),
);
const SolnamesTrasnferdomainnameOne = React.lazy(
  () => import("pages/SolnamesTrasnferdomainnameOne"),
);
const SolnamesCheckout = React.lazy(() => import("pages/SolnamesCheckout"));
const SolnamesChoosetokentoconnectwith = React.lazy(
  () => import("pages/SolnamesChoosetokentoconnectwith"),
);
const BuyModal = React.lazy(() => import("pages/BuyModal"));
const SolnamesViewDomain = React.lazy(() => import("pages/SolnamesViewDomain"));
const SolnamesDomaindetailsOne = React.lazy(
  () => import("pages/SolnamesDomaindetailsOne"),
);
const SolnamesSubdomains = React.lazy(() => import("pages/SolnamesSubdomains"));
const SolnamesProfile = React.lazy(() => import("pages/SolnamesProfile"));
const EditProfile = React.lazy(() => import("pages/EditProfile"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const DomainListFilterandActivityClose = React.lazy(
  () => import("pages/DomainListFilterandActivityClose"),
);
const DomainListActivityClose = React.lazy(
  () => import("pages/DomainListActivityClose"),
);
const DomainListFilterClose = React.lazy(
  () => import("pages/DomainListFilterClose"),
);
const DOmainexplorefullopen = React.lazy(
  () => import("pages/DOmainexplorefullopen"),
);
const WalletsOne = React.lazy(() => import("pages/WalletsOne"));
const Wallets = React.lazy(() => import("pages/Wallets"));
const ViewDetailsOne = React.lazy(() => import("pages/ViewDetailsOne"));
const ViewDetails = React.lazy(() => import("pages/ViewDetails"));
const DomainClickOverView = React.lazy(
  () => import("pages/DomainClickOverView"),
);
const SolnamesDomaindetails = React.lazy(
  () => import("pages/SolnamesDomaindetails"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SolnamesDomaindetails />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/domainclickoverview"
            element={<DomainClickOverView />}
          />
          <Route path="/viewdetails" element={<ViewDetails />} />
          <Route path="/viewdetailsone" element={<ViewDetailsOne />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/walletsone" element={<WalletsOne />} />
          <Route
            path="/domainexplorefullopen"
            element={<DOmainexplorefullopen />}
          />
          <Route
            path="/domainlistfilterclose"
            element={<DomainListFilterClose />}
          />
          <Route
            path="/domainlistactivityclose"
            element={<DomainListActivityClose />}
          />
          <Route
            path="/domainlistfilterandactivityclose"
            element={<DomainListFilterandActivityClose />}
          />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/solnamesprofile" element={<SolnamesProfile />} />
          <Route path="/solnamessubdomains" element={<SolnamesSubdomains />} />
          <Route
            path="/solnamesdomaindetailsone"
            element={<SolnamesDomaindetailsOne />}
          />
          <Route path="/solnamesviewdomain" element={<SolnamesViewDomain />} />
          <Route path="/buymodal" element={<BuyModal />} />
          <Route
            path="/solnameschoosetokentoconnectwith"
            element={<SolnamesChoosetokentoconnectwith />}
          />
          <Route path="/solnamescheckout" element={<SolnamesCheckout />} />
          <Route
            path="/solnamestrasnferdomainnameone"
            element={<SolnamesTrasnferdomainnameOne />}
          />
          <Route
            path="/solnameschoosesubdomainwalletwith"
            element={<SolnamesChooseSubdomainWalletwith />}
          />
          <Route
            path="/solnamessubdomaincheckout"
            element={<SolnamesSubdomainCheckout />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
