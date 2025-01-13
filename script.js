document.addEventListener('DOMContentLoaded', () => {
    const datapoints = document.querySelectorAll('.datapoint-item');
    datapoints.forEach(datapoint => {
        datapoint.addEventListener('click', () => {
            // Logica per mostrare la pagina di dettaglio
            window.location.href = 'dettaglio.html'; // Cambia con il percorso corretto
        });
    });
    // Placeholder for future JSON data handling
    console.log('Ready to load datapoints');
});
