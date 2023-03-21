  const apiUrl = 'https://opentdb.com/api.php?amount=10';


fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('API data:', data);

    const table = document.getElementById('api-data');

    // Check if the data is empty
    if (data.length === 0) {
      const errorRow = table.insertRow();
      const errorCell = errorRow.insertCell();
      errorCell.colSpan = 999; // Set the cell to span all columns
      errorCell.innerText = 'No data available';
      return;
    }

    const headers = Object.keys(data[0]);
    const headerRow = table.insertRow();
    headers.forEach(header => {
      const th = document.createElement('th');
      th.innerText = header;
      headerRow.appendChild(th);
    });
    data.forEach(rowData => {
      const row = table.insertRow();
      headers.forEach(header => {
        const cell = row.insertCell();
        cell.innerText = rowData[header];
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
