import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import {DarkModeProvider} from "./context/DarkMode.jsx";
import OwnerLayout from "./features/owner/OwnerLayout.jsx";

const queryClient = new QueryClient()
function App() {

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
                          <Route path="dashboard" element={<Dashboard/>} />
                          <Route path="projects" element={<Projects/>} />
                          <Route path="projects/:id" element={<Project/>} />
                      </Route>
                  </Routes>
              </div>
          </QueryClientProvider>
      </DarkModeProvider>



  )
}

export default App
