import { useState } from "react";

import {
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

import styles from "./Calculator.module.scss";

function Calculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setImc] = useState(0);

  function calculateImc() {
    const heightToMeters = height / 100;
    const imcCalc = weight / (heightToMeters * heightToMeters);
    setImc(Number(imcCalc.toFixed(2)));
  }

  function verifyImc() {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade grau 1";
    if (imc < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  }

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
              onChange={({ target }) => setHeight(Number(target.value))}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Peso em Kg"
              variant="filled"
              fullWidth
              type="number"
              onChange={({ target }) => setWeight(Number(target.value))}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => calculateImc()}
            >
              Calcular
            </Button>
          </Grid>
          <Grid item>
            {imc === 0 ? (
              ""
            ) : (
              <Typography>
                O seu IMC é: {imc} kg/m2 {verifyImc()}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Calculator;
