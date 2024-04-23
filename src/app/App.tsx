import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { Navbar } from "../components/Navbar/Navbar";
// import { AddWorkerProvider } from "app/providers/AddWorkerProvider/AddWorkerContext";

import { Suspense } from "react";

import { AddWorkerProvider } from "../app/providers/AddWorkerProvider/AddWorkerContext";
import { AddEstimateProvider } from "../app/providers/AddEstimateProvider/lib/EstimateContext";
import { Loader } from "../shared/ui";
import { EstimateAsync } from "../pages/Estimate/ui/Estimate.async";
import { SettingsAsync } from "../pages/AdminPanel/ui/Settings.async";
import { HistoryAsync } from "../pages/History/ui/History.async";
import { ReportsAsync } from "../pages/Reports/ui/Reports.async";
import { ErrorBoundary } from "../app/ErrorBoundary/ErrorBoundary";
import { Estimate } from "../pages/Estimate/ui/Estimate";
import { Settings } from "../pages/AdminPanel/ui/Settings";
import { Reports } from "../pages/Reports/ui/Reports";
import { History } from "../pages/History/ui/History";

function App() {
  return (
    <AddWorkerProvider>
      <AddEstimateProvider>
        <Navbar />
        <Container>
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            {/* <ErrorBoundary fallback={<div>SOMWTHING WRONG</div>}> */}
            <Routes>
              {/* <Route path="/" element={<EstimateAsync />} /> */}
              <Route path="/" element={<Estimate />} />

              <Route path="/history" element={<History />} />
              <Route path="/reports" element={<Reports />} />
              {/* <Route path="/admin-settings" element={<SettingsAsync />} /> */}

              <Route path="/admin-settings" element={<Settings />} />
            </Routes>
            {/* </ErrorBoundary> */}
          </Suspense>
        </Container>
      </AddEstimateProvider>
    </AddWorkerProvider>
  );
}

export default App;
