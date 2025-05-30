function generateTable() {
  const num = parseInt(document.getElementById('numInput').value);
  const outputDiv = document.getElementById('tableResult');
  
  if (isNaN(num)) {
    outputDiv.innerHTML = "<p>Please enter a valid number.</p>";
    return;
  }

  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `<p>${num} × ${i} = <strong>${num * i}</strong></p>`;
  }
  outputDiv.innerHTML = output;
}
