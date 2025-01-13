// Questo script verrà utilizzato per caricare e mostrare i dati del candidato
document.addEventListener('DOMContentLoaded', () => {
    // Esempio di caricamento dati da un file JSON
    fetch('candidato.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Qui puoi aggiungere il codice per mostrare i dati sulla pagina
        })
        .catch(error => console.error('Errore nel caricamento dei dati:', error));
});
