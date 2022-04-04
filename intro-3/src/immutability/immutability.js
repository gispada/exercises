const user10 = Object.freeze({
  id: 10,
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  address: Object.freeze({
    street: 'Kattie Turnpike',
    suite: 'Suite 198',
    city: 'Lebsackbury',
    zipcode: '31428-2261',
    geo: Object.freeze({
      lat: '-38.2386',
      lng: '57.2232'
    })
  }),
  phone: '024-648-3804',
  website: 'ambrose.net',
  company: Object.freeze({
    name: 'Hoeger LLC',
    catchPhrase: 'Centralized empowering task-force',
    bs: 'target end-to-end models'
  })
})

export const users = Object.freeze([user10])

// addressChanges è un oggetto che contiene una o più proprietà di Address da cambiare, ad esempio { city: London }
// Ritornare l'array di utenti con le proprietà cambiate, mantenendo invariate quelle non presenti in addressChanges
export const changeUsersAddress = (users, addressChanges) => {}

// Ritornare l'array di utenti senza geo in address
export const removeAddressCoordinates = (users) => {}

// Ritornare l'array di utenti senza company
export const removeCompanyInfo = (users) => {}

// Aggiungere newUser a users e ritornare l'array
export const addNewUser = (users, newUser) => {}

// Ritornare l'array di utenti con lat e lng dentro geo convertiti in numero, non stringa
export const convertUsersGeoToNumber = (users) => {}
