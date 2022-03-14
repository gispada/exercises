# Istruzioni

> Link: https://stackblitz.com/edit/intro-02

A partire dall'array `config` generare dinamicamente il form e inserirlo nell'elemento con id `dynamic-form`.

Ogni sezione in `config` ha un titolo, una descrizione e dei campi (`fields`) di due tipi:

- `text`: input con un'etichetta (`label`) sopra;
- `product`: riga con una checkbox, il nome del prodotto e il prezzo; in questo caso i dati del prodotto devono essere recuperati dall'array `products` in base all'id; deve essere possibile selezionare e deselezionare i prodotti.

Per avere una base da cui partire, la struttura HTML statica è già stata creata; nel file `fields.js` inoltre sono presenti alcune funzioni da completare per generare le sezioni, i campi di tipo `text`e i campi di tipo `product`.

Cliccando su **Register** bisogna mostrare in un alert i campi di tipo `text` nel formato `- id_campo: valore_campo`; sotto questi campi il totale dei prodotti selezionati oppure 0.

## Specifiche stile
- Dimensioni container principale: 1024x600px;
- Il container è centrato nella pagina;
- Gli angoli arrotondati del container hanno un radius di 64px;
- La metà di destra è larga 1.5 volte la metà di sinistra;
- Il contenuto in entrambe le metà ha un padding di 64px;
- Per i colori fare riferimento alle variabili nel file `style.css`.

## Validazione dinamica
L'array `validationRules` contiene regole di validazione da applicare ai campi del form.

```js
const validationRules = [
  ['email', { required: true, includes: '@', min: 5 }],
  ['name', { required: true, min: 5 }],
  ['surname', { required: true }]
]
```

In questo array ogni elemento è a sua volta un array, dove:
- Il primo elemento (ad esempio `email`) indica l'id del campo interessato dalle regole;
- Il secondo elemento raggruppa le regole da applicare al campo affinché risulti valido (**tutte le regole** devono essere soddisfatte).

Sono previste tre tipologie di regole:
- `required` uguale a `true` rende il campo obbligatorio;
- `includes` indica che il campo deve necessariamente contenere la stringa specificata;
- `min` richiede che il campo abbia una lunghezza pari o superiore al valore specificato.

Cliccando su **Register** è necessario validare i campi in base a queste regole, e visualizzare quelli invalidi in un alert, nel formato `campo_invalido1, campo_invalido2 ... NOT valid!`.
