// src/utils/github.ts

export async function createGitHubRepoAndUploadFile(
  accessToken: string,
  repoName: string,
  htmlContent: string
): Promise<string> {
  const repoResponse = await fetch("https://api.github.com/user/repos", {
    method: "POST",
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({
      name: repoName,
      description: "Website generated from Excel",
      private: false,
    }),
  });

  if (!repoResponse.ok) {
    throw new Error("Failed to create GitHub repository");
  }

  const repoData = await repoResponse.json();
  const username = repoData.owner.login;

  const uploadResponse = await fetch(
    `https://api.github.com/repos/${username}/${repoName}/contents/index.html`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        message: "Initial commit",
        content: btoa(htmlContent), // codifica em base64
      }),
    }
  );

  if (!uploadResponse.ok) {
    throw new Error("Failed to upload index.html");
  }

  return repoData.html_url;
}
