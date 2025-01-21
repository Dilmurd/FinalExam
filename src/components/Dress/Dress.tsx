import "./Dress.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import dress from "../../assets/dress.png";
import dress2 from "../../assets/dress2.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Dress() {
  return (
    <main>
      <section className="dress">
        <div className="container">
          <div className="dress__wrapper">
            <div className="dress__title">
              <p>BROWSE BY dress STYLE</p>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1.5}>
                <Grid size={4}>
                  <Item className="items2"><img className="dress" src={dress} alt="" /></Item>
                </Grid>
                <Grid size={8}>
                  <Item className="items"><img  src={dress2} alt="" /></Item>
                </Grid>
                <Grid size={8}>
                  <Item className="items"><img src={dress2} alt="" /></Item>
                </Grid>
                <Grid size={4}>
                  <Item className="items2"><img className="dress" src={dress} alt="" /></Item>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dress;
