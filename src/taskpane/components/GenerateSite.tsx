import React from "react";
import { getDataFromSheet } from "../utils/excelUtils";
import { generateHTML } from "../utils/htmlUtils";
import { createGitHubRepoAndUploadFile } from "../utils/github";

export const GenerateSite = () => {
  const handleGenerate = async () => {
    try {
      const data = await getDataFromSheet();
      const html = generateHTML(data);

      const repoName = "excel2web-generated-site";
      const fileName = "index.html";

      const repoUrl = await createGitHubRepoAndUploadFile(repoName, fileName, html);

      alert(`Site enviado para o GitHub com sucesso!\n\nAcesse: ${repoUrl}`);
    } catch (error) {
      console.error("Erro ao gerar o site:", error);
      alert("Ocorreu um erro ao gerar o site. Veja o console para mais detalhes.");
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
