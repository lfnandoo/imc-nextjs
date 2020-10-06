import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

import styles from "./Calculator.module.scss";

function Calculator() {
  return (
    <div className={styles.calculator}>
      <Container maxWidth="xs">
        <Typography variant="h3">Calculadora</Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="Altura em cm"
              variant="filled"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Peso em Kg"
              variant="filled"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth>
              Calcular
            </Button>
          </Grid>
          <Grid item>
            <Typography>O seu IMC é: </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Calculator;
