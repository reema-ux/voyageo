const countries = [
  {
    name: "France",
    cities: ["Paris", "Lyon", "Marseille"]
  },
  {
    name: "Japan",
    cities: ["Tokyo", "Kyoto", "Osaka"]
  },
  {
    name: "Brazil",
    cities: ["Rio de Janeiro", "São Paulo", "Brasília"]
  },
  {
    name: "Egypt",
    cities: ["Cairo", "Alexandria", "Giza"]
  },
  {
    name: "Canada",
    cities: ["Toronto", "Vancouver", "Montreal"]
  }
];

const container = document.getElementById("countries-container");

countries.forEach((country) => {
  const div = document.createElement("div");
  div.className = "country-card";
  div.innerHTML = `<h2>${country.name}</h2><ul>` +
    country.cities.map(city => `<li>${city}</li>`).join("") +
    `</ul>`;
  container.appendChild(div);
});
