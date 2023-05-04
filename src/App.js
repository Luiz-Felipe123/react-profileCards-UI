import './App.css';
import Card from '../src/components/Card';
import { Grid } from "@mui/material";
import PeoplePage from '../src/pages/PeoplePage';

const App = () => {
  return (
    <Grid container>
      <PeoplePage />
    </Grid>
  );
};

export default App;
