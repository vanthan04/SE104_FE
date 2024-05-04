import { Box } from "@mui/material";
import AppBar from "./components/AppBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Box>
      <Box>
        <AppBar/>
      </Box>
      <Box>
        <Outlet/>
      </Box>
    </Box>

  );
}

export default App;
