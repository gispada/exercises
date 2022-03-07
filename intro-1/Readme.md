# Istruzioni

A partire dal seguente array:

```js
const seats = [
  {
    id: 1,
    price: 4,
  },
  {
    id: 2,
    price: 4,
  },
  {
    id: 3,
    price: 6,
    premium: true,
  },
  {
    id: 4,
    price: 6,
    premium: true,
  },
  {
    id: 5,
    price: 4,
  }
]
```

1. Ogni posto (*seat*) va visualizzato sull'interfaccia, come box quadrato di dimensioni 48px con il numero (`id`) **al centro**.
2. I posti di tipo `premium` devono avere una fascia nell'angolo in altro a destra, ruotata di 45°.
3. Quando si clicca su un box, va evidenziato con un colore diverso e il suo prezzo aggiunto al totale.
4. Se si clicca su un box già selezionato, torna al colore originale e il suo prezzo viene sottratto dal totale.
5. Il bottone "Buy" deve essere disabilitato se nessun posto è stato selezionato.
6. Al click su "Buy" deve comparire un `alert` (`window.alert("message")`) che mostra il numero di posti selezionati.

Il tutto va realizzato senza usare framework o librerie esterne (come jQuery).

Il codice (nome di variabili, funzioni, ecc.) deve essere in inglese.
