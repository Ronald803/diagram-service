import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import  PrivateRoute  from "./modules/auth/guard/authGuard";
import AuthProvider from "./modules/auth/hooks/auth-provider"


function App(){

  return(
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={ <HomePage/> }/>
          </Route>
          <Route path="/login" element={ <LoginPage/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App;