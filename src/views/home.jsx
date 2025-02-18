import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Clase 1",
      description: "Introducción a React y configuración del entorno.",
      rute: "/clase1",
    },
    {
      title: "Clase 2",
      description: "Sintaxis JSX y componentes funcionales",
      rute: "/clase2",
    },
    {
      title: "Clase 3",
      description: "Eventos y manejo de estado",
      rute: "/clase3",
    },
    {
      title: "Clase 4",
      description: "Ciclo de vida y listas",
      rute: "/clase4",
    },
    {
      title: "Clase 5",
      description: "Aplicación de estilos en componentes",
      rute: "/clase5",
    },
    {
      title: "Clase 6",
      description: "Consumo de APIs",
      rute: "/clase6",
    },
    {
      title: "Clase 7",
      description: "Comunicación entre componentes y Redux",
      rute: "/clase7",
    },
    {
      title: "Clase 8",
      description: "Navegación en React",
      rute: "/clase8",
    },
    {
      title: "Clase 9",
      description: "Formularios en React",
      rute: "/clase9",
    },
    {
      title: "Clase 10",
      description: "Librería Material UI",
      rute: "/clase10",
    },
  ];

  const handleButton = (ruta) => {
    navigate(ruta);
  };

  return (
    <>
      <Container>
        <Typography className="promotor-title" sx={{ mt: 5 }}>
          Bootcamp React
        </Typography>
        <Grid2
          container
          spacing={3}
          justifyContent="center"
          sx={{ mb: 3, mt: 4 }}
        >
          {cardData.map((card, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "200px", width: "250px", mx: "auto" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ textAlign: "center" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleButton(card.rute)}
                    fullWidth
                  >
                    Ver más
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
};

export default Home;
