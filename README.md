# Web App Candidato

Questa è una semplice web app progettata per mostrare i dati di un candidato. L'app utilizza HTML, CSS e JavaScript per visualizzare le informazioni estratte da un file JSON.

## Struttura del Progetto

- **index.html**: La pagina principale che include una barra superiore con il nome del candidato.
- **styles.css**: Contiene gli stili per la pagina web.
- **script.js**: Uno script JavaScript che carica i dati del candidato da un file JSON e li visualizza nella console.
- **candidato.json**: Un file JSON di esempio contenente i dati del candidato.

## Come Usare

1. Visita il sito web al seguente URL: [https://valerialevantesi.github.io/datapoints-render/](https://valerialevantesi.github.io/datapoints-render/)
2. I dati del candidato vengono caricati da `candidato.json` e possono essere visualizzati nella console del browser.

## Tipi di Datapoint nel JSON

Nel file JSON ci sono due tipi di datapoint:
- **Flat**: contiene direttamente il dato/valore.
- **Iterable**: è un contenitore di una lista di valori dinamici.

I campi dati possono essere di diversi tipi:
- Booleani
- Stringa
- Array di stringhe
- Numero
- Mappa

## Note

Questa app è un esempio di base e può essere estesa per includere ulteriori funzionalità e stili.
