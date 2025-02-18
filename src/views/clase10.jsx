import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Clase10 = () => {
  const MiBoton = styled(Button)(({ color }) => ({
    backgroundColor: color,
    "&:hover": {
      backgroundColor: `dark${color}`,
    },
  }));
  return (
    <Container sx={{ mt: 5 }}>
      <div>
        <Button variant="contained" color="primary">
          Hola, Material UI
        </Button>
      </div>

      <div>
        <MiBoton sx={{ mt: 5 }} color="purple">
          Botón Personalizado
        </MiBoton>
      </div>

      <div>
        <Button sx={{ mt: 5 }} variant="contained" startIcon={<DeleteIcon />}>
          Eliminar
        </Button>
      </div>

      <div>
        <Button sx={{ mt: 5 }} variant="contained" color="primary">
          Botón con Tema
        </Button>
        <br />
        <Button sx={{ mt: 5 }} variant="contained" color="secondary">
          Botón Secundario
        </Button>
      </div>
    </Container>
  );
};

export default Clase10;
