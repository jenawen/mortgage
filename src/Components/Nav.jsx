import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Nav = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <ToolBar>
          <Typography variant="h5">Mortgage Calculator</Typography>
        </ToolBar>
      </Container>
    </AppBar>
  );
};

export default Nav;
