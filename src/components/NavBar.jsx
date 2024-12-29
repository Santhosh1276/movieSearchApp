import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
      <AppBar position="static" sx={{backgroundColor:"green"}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MOVIE SEARCH APPLICATION
          </Typography>
          
            <Button color="white" onClick={()=> navigate("/")}>Home</Button>
            <Button color="white"  onClick={()=> navigate("/details")}>Details</Button>
            <Button color="white"  onClick={()=> navigate("/favourites")}>Fav</Button>
          
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;