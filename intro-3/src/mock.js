export const usersSimple = [
  { id: 1, name: 'Jane', age: 44 },
  { id: 2, name: 'Mary', age: 50 },
  { id: 3, name: 'Jane', age: 23 },
  { id: 4, name: 'Lucy', age: 34 },
  { id: 5, name: 'Mark', age: 44 },
  { id: 6, name: 'Vincent', age: 50 }
]

export const products = [
  { product: 'P1', price: 50, quantity: 2, special: true },
  { product: 'P90', price: 120, quantity: 3 },
  { product: 'P8', price: 78, quantity: 1 },
  { product: 'P12', price: 189, quantity: 4 },
  { product: 'P33', price: 199, quantity: 1, special: true }
]

export const comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    userId: 2,
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
  },
  {
    postId: 2,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    userId: 3,
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
  },
  {
    postId: 1,
    id: 3,
    name: 'alias odio sit',
    userId: 3,
    body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
  }
]

export const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 3,
    name: 'lementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net'
  }
]

export const posts = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 2,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
  }
]

export const geoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [11.1215698, 46.0677293]
      },
      properties: {
        name: "Fontana dell'Aquila"
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [11.34267, 44.49423]
      },
      properties: {
        name: 'Fontana del Nettuno'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [11.1214686, 46.0677385],
          [11.121466, 46.0677511],
          [11.1213806, 46.0681452],
          [11.1213548, 46.0682642],
          [11.1213115, 46.0684385],
          [11.1212897, 46.0685261],
          [11.1212678, 46.0686443]
        ]
      },
      properties: {
        lanes: 1,
        name: 'Via Rodolfo Belenzani'
      }
    }
  ]
}
