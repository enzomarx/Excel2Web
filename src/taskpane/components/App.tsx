import * as React from "react";
import HeroList, { HeroListItem } from "./HeroList";
import { makeStyles } from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";
import { GenerateSite } from "./GenerateSite";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#d641a1",
    color: "#ffffff",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    borderLeft: "5px solid #000",
    borderRight: "5px solid #000",
  },
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();

  const listItems: HeroListItem[] = [
    {
      icon: <Ribbon24Regular />,
      primaryText: "Voce pode criar seu site de forma facil",
    },
    {
      icon: <LockOpen24Regular />,
      primaryText: "gere sua pagina web aparir de uma planilha do Excel",
    },
    {
      icon: <DesignIdeas24Regular />,
      primaryText: "Um html simples e responsivo",
    },
  ];

  return (
    <div className={styles.root}>
      {/* Logo + Título */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="assets/Simpol logo for something 4.png"
          alt="Logo"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid #000", // contorno preto ao redor da logo
          }}
        />
        <h1
          style={{
            color: "#a8e636",
            fontSize: "2rem",
            marginTop: "1rem",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          Excel2Web
        </h1>
      </div>

      {/* Lista de recursos */}
      <HeroList message="Demonstracao" items={listItems} />

      {/* Botão diretamente após a lista */}
      <GenerateSite />
    </div>
  );
};

export default App;
