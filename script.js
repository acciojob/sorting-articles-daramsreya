//your JS code here. If required.
const ul=document.getElementById("bands");
const items = [...ul.querySelectorAll("li")];
items.sort((a, b) =>
  a.textContent.replace(/^(a |an |the )/i, "").localeCompare(
    b.textContent.replace(/^(a |an |the )/i, "")
  )
);

ul.innerHTML = "";
items.forEach(item => ul.appendChild(item));