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
import SubmittedProjects from "./features/freelancer/SubmittedProjects.jsx";
import Proposals from "./pages/Proposals.jsx";
import FreelancerDashboard from "./pages/FreelancerDashboard.jsx";
import ProtectedRoute from "./ui/protectedRoute.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Users from "./pages/Users.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Header from "./ui/Header.jsx";
import Footer from "./ui/Footer.jsx";
import NotBuild from "./pages/NotBuild.jsx";

function App() {
    const queryClient = new QueryClient()

  return (
      <DarkModeProvider>
          <QueryClientProvider client={queryClient}>
              <Toaster/>
              <div className={'text-[10px] sm:text-sm'}>
                  <Header/>
                  <main className={' overflow-y-auto *:h-[calc(100vh-4rem)] *:pt-20 *:sm:h-screen '}>
                      <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="*" element={<NotFound />} />
                          <Route path="/not-build" element={<NotBuild />} />
                          <Route path="/auth" element={<Auth/>} />
                          <Route path="/complete-profile" element={<CompleteProfile/>} />
                          <Route path="/owner" element={<ProtectedRoute><AppLayout /> </ProtectedRoute>}>
                              <Route index element={<Navigate to={'dashboard'} replace={true} />} />
                              <Route path="dashboard" element={<OwnerDashboard/>} />
                              <Route path="projects" element={<Projects/>} />
                              <Route path="projects/:id" element={<Project/>} />
                          </Route>
                          <Route path="/freelancer" element={<ProtectedRoute><AppLayout /> </ProtectedRoute>}>
                              <Route index element={<Navigate to={'dashboard'} replace={true} />} />
                              <Route path="dashboard" element={<FreelancerDashboard/>} />
                              <Route path="proposals" element={<Proposals/>} />
                              <Route path="projects" element={<SubmittedProjects/>} />
                          </Route>
                          <Route path='/admin' element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
                              <Route index element={<Navigate to={'dashboard'} replace={true} />} />
                              <Route path="dashboard" element={<AdminDashboard/>} />
                              <Route path="users" element={<Users/>} />
                              <Route path="projects" element={<SubmittedProjects/>} />
                              <Route path="proposals" element={<Proposals/>} />
                          </Route>
                      </Routes>
                  </main>
                  <div className={'sm:hidden'}><Footer/></div>
              </div>
          </QueryClientProvider>
      </DarkModeProvider>
  )
}

export default App
