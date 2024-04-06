import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routingcomponent from "./Routingcomponent";
import { AuthContextProvider } from "./context/AuthContext";



function App() {
  return (
    <>
    <AuthContextProvider>


    
    <Navbar/>
    <Routingcomponent/>
    </AuthContextProvider>
    </>
  );
}

export default App;
