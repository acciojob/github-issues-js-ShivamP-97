//your code here
let currentPage = 1;
async function loadIssues(page) {
  const url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;

  try {
    const response = await fetch(url);
    const issues = await response.json();

    const list = document.getElementById("issues-list");
    list.innerHTML = "";

    issues.forEach(issue => {
      const li = document.createElement("li");
      li.textContent = issue.title;
      list.appendChild(li);
    });

    document.getElementById("page-heading").textContent = `Page ${page}`;

  } catch (error) {
    console.error("Error loading issues:", error);
  }
}

window.onload = () => {
  loadIssues(currentPage);
};

document.getElementById("load_next").addEventListener("click", () => {
  currentPage++;
  loadIssues(currentPage);
});

document.getElementById("load_prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadIssues(currentPage);
  }
});
