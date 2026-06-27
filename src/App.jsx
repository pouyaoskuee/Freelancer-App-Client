import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import OwnerDashboard from "./pages/OwnerDashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import {DarkModeProvider} from "./context/DarkMode.jsx";
import OwnerLayout from "./features/owner/OwnerLayout.jsx";
import FreelancerLayout from "./features/freelancer/FreelancerLayout.jsx";
import SubmittedProjects from "./features/freelancer/SubmittedProjects.jsx";
import Proposals from "./pages/Proposals.jsx";
import FreelancerDashboard from "./pages/FreelancerDashboard.jsx";

function App() {
    const queryClient = new QueryClient()

  return (
      <DarkModeProvider>
          <QueryClientProvider client={queryClient}>
              <Toaster/>
              <div className={''}>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="*" element={<NotFound />} />
                      <Route path="/auth" element={<Auth/>} />
                      <Route path="/complete-profile" element={<CompleteProfile/>} />
                      <Route path="/owner" element={<OwnerLayout />}>
                          <Route index element={<Navigate to={'dashboard'} replace={true} />} />
                          <Route path="dashboard" element={<OwnerDashboard/>} />
                          <Route path="projects" element={<Projects/>} />
                          <Route path="projects/:id" element={<Project/>} />
                      </Route>
                      <Route path="/freelancer" element={<FreelancerLayout/>}>
                          <Route index element={<Navigate to={'dashboard'} replace={true} />} />
                          <Route path="dashboard" element={<FreelancerDashboard/>} />
                          <Route path="proposals" element={<Proposals/>} />
                          <Route path="projects" element={<SubmittedProjects/>} />
                      </Route>
                  </Routes>
              </div>
          </QueryClientProvider>
      </DarkModeProvider>
  )
}

export default App
