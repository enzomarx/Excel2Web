import React from "react";
import { getDataFromSheet } from "../utils/excelUtils";
import { generateHTML, downloadHTML } from "../utils/htmlUtils";

export const GenerateSite = () => {
  const handleGenerate = async () => {
    const data = await getDataFromSheet();
    const html = generateHTML(data);
    downloadHTML("site-gerado.html", html);
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
        <p style={{ color: "#fff" }}>Preencha os dados no Excel e clique no botão abaixo:</p>
        <button
        onClick={handleGenerate}
        style={{
            backgroundColor: "#a8e636", // verde-limão
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
