export async function getDataFromSheet(): Promise<{
  title: string;
  sections: { header: string; content: string }[];
}> {
  return Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getActiveWorksheet();
    const range = sheet.getRange("A1:B20").load("values");
    await context.sync();

    const [_, ...rows] = range.values;
    const sections = rows.map(([header, content]) => ({
      header,
      content,
    })).filter(s => s.header && s.content);

    return {
      title: range.values[0][1] || "Meu Site",
      sections
    };
  });
}
