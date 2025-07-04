import React from "react";
import { getDataFromSheet } from "../utils/excelUtils";
import { generateHTML } from "../utils/htmlUtils";
import { createGitHubRepoAndUploadFile } from "../utils/github";

export const GenerateSite = () => {
  const handleGitHubLogin = () => {
    const authWindow = window.open(
      "https://github.com/login/oauth/authorize?client_id=Ov23liu5V7A6nBkrG9Yd&scope=repo",
      "_blank",
      "width=600,height=700"
    );

    window.addEventListener("message", async (event) => {
      const accessToken = event.data;
      localStorage.setItem("github_token", accessToken);
      alert("GitHub conectado com sucesso!");
    });
  };

  const handleGenerate = async () => {
    try {
      const accessToken = localStorage.getItem("github_token");
      if (!accessToken) {
        alert("Você precisa conectar com o GitHub primeiro.");
        return;
      }

      const data = await getDataFromSheet();
      const html = generateHTML(data);

      const repoName = "excel2web-generated-site";
      const repoUrl = await createGitHubRepoAndUploadFile(accessToken, repoName, html);

      alert(`Site enviado para o GitHub com sucesso!\n\nAcesse: ${repoUrl}`);
    } catch (error) {
      console.error("Erro ao gerar o site:", error);
      alert("Erro ao gerar o site. Veja o console para detalhes.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.8rem"
      }}
    >
      <h3 style={{ color: "#fff" }}>Gerar Website</h3>
      <p style={{ color: "#fff" }}>
        Preencha os dados no Excel e clique no botão abaixo:
      </p>

      <button
        onClick={handleGitHubLogin}
        style={{
          backgroundColor: "#333",
          color: "#fff",
          fontWeight: "bold",
          padding: "10px 20px",
          border: "2px solid #000",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "1rem"
        }}
      >
        Conectar com GitHub
      </button>

      <button
        onClick={handleGenerate}
        style={{
          backgroundColor: "#a8e636",
          color: "#000",
          fontWeight: "bold",
          padding: "10px 20px",
          border: "2px solid #000",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Gerar Site
      </button>
    </div>
  );
};
