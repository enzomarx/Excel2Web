export function generateHTML(data: { title: string; sections: { header: string; content: string }[] }): string {
  const { title, sections } = data;
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>${title}</title>
    <style>
      body { font-family: sans-serif; background: #f0f0f0; padding: 2rem; }
      h1 { color: #333; }
      section { margin-bottom: 20px; }
    </style>
  </head>
  <body>
    <h1>${title}</h1>
    ${sections.map(s => `<section><h2>${s.header}</h2><p>${s.content}</p></section>`).join("\n")}
  </body>
  </html>
  `;
}

export function downloadHTML(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}
