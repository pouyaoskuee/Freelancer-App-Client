import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient()
function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <Toaster/>
          <div className={'container'}>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="*" element={<NotFound />} />
                      <Route path="/auth" element={<Auth/>} />
                      <Route path="/complete-profile" element={<CompleteProfile/>} />
                  </Routes>
          </div>
      </QueryClientProvider>


  )
}

export default App
