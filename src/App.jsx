import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import store from "./services/store";
import { useState } from "react";

import tema from "./theme/themeMaterialUi";
import { ThemeProvider } from "@mui/material";

function App() {
  const [autenticado, setAutenticado] = useState(false);
  return (
    <Provider store={store}>
      <ThemeProvider theme={tema}>
        <AppRoutes autenticado={autenticado} setAutenticado={setAutenticado} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
