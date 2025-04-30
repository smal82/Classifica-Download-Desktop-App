const classificaTableBody = document.querySelector('#classifica-table tbody');

window.api.receiveData((event, data) => {
    classificaTableBody.innerHTML = ''; // Pulisci la tabella
    data.forEach(item => {
        const row = classificaTableBody.insertRow();
        const distroCell = row.insertCell();
        const downloadCell = row.insertCell();
        distroCell.textContent = item.Distro;
        downloadCell.textContent = item.Download;
    });
});