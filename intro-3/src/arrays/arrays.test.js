import {
  cloneArray,
  addToArrayEnd,
  addToArrayBeginning,
  insertIntoArray,
  findBy,
  toggleArrayItem,
  removeFromArray,
  filterBy,
  mergeArrays,
  mergeArraysUnique,
  sortBy,
  keyBy,
  replaceItemAtIndex,
  addExtraProperties,
  removeProperties,
  setSelected,
  mapTo,
  areItemsValid,
  populate,
  getTotal,
  populatePosts,
  map,
  filter,
  reduce,
  some,
  every
} from './arrays'
import { usersSimple, products, posts, comments, users } from '../mock'

describe('cloneArray', () => {
  it('Clones a simple array making a separate copy', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual([1, 2, 3])
    expect(cloneArray(array)).not.toBe(array)
  })
})

describe('addToArrayEnd', () => {
  it('Inserts the element at the end of the array', () => {
    expect(addToArrayEnd([1, 2, 3, 4], 10)).toEqual([1, 2, 3, 4, 10])
  })
})

describe('addToArrayBeginning', () => {
  it('Inserts the element at the beginning of the array', () => {
    expect(addToArrayBeginning([1, 2, 3, 4], 10)).toEqual([10, 1, 2, 3, 4])
  })
})

describe('insertIntoArray', () => {
  it('Inserts the element at the specified index (2)', () => {
    expect(insertIntoArray([1, 2, 3, 4], 10, 2)).toEqual([1, 2, 10, 3, 4])
  })

  it('Handles a negative index', () => {
    expect(insertIntoArray([1, 2, 3, 4], 10, -3)).toEqual([10, 1, 2, 3, 4])
  })

  it("Handles an index longer than the array's length", () => {
    expect(insertIntoArray([1, 2, 3, 4], 10, 30)).toEqual([1, 2, 3, 4, 10])
  })
})

describe('findBy', () => {
  it('Finds the correct result - 1', () => {
    expect(findBy(usersSimple, { id: 2 })).toEqual({
      id: 2,
      name: 'Mary',
      age: 50
    })
  })

  it('Finds the correct result - 2', () => {
    expect(findBy(usersSimple, { name: 'Jane' })).toEqual({
      id: 1,
      name: 'Jane',
      age: 44
    })
  })

  it('Finds the correct result - 3', () => {
    expect(findBy(usersSimple, { age: 50 })).toEqual({
      id: 2,
      name: 'Mary',
      age: 50
    })
  })

  it('Returns null when nothing is found', () => {
    expect(findBy(usersSimple, { city: 'Rome' })).toBeNull()
  })
})

describe('filterBy', () => {
  it('Filters by the specified condition - 1', () => {
    expect(filterBy(usersSimple, { id: 2 })).toEqual([
      { id: 2, name: 'Mary', age: 50 }
    ])
  })

  it('Filters by the specified condition - 2', () => {
    expect(filterBy(usersSimple, { age: 50 })).toEqual([
      { id: 2, name: 'Mary', age: 50 },
      { id: 6, name: 'Vincent', age: 50 }
    ])
  })

  it('Returns an empty array when nothing is found', () => {
    expect(filterBy(usersSimple, { city: 'Rome' })).toEqual([])
  })
})

describe('toggleArrayItem', () => {
  it('Adds the missing element to the end', () => {
    expect(toggleArrayItem(['William', 'George', 'Mary'], 'Jacob')).toEqual([
      'William',
      'George',
      'Mary',
      'Jacob'
    ])
  })

  it("Removes the element when it's already present", () => {
    expect(toggleArrayItem(['William', 'George', 'Mary'], 'George')).toEqual([
      'William',
      'Mary'
    ])
  })
})

describe('removeFromArray', () => {
  it('Removes the item at the specified index', () => {
    expect(
      removeFromArray(
        [{ name: 'Lucy' }, { name: 'Igor' }, { name: 'Peter' }],
        1
      )
    ).toEqual([{ name: 'Lucy' }, { name: 'Peter' }])
  })

  it('Handles a negative index', () => {
    expect(removeFromArray(usersSimple, -10)).toBe(usersSimple)
  })

  it("Handles an index greater than the array's length", () => {
    expect(removeFromArray(usersSimple, 100)).toBe(usersSimple)
  })
})

describe('mergeArrays', () => {
  it('Merges two arrays', () => {
    expect(mergeArrays([1, 2, 3, 4], [11, 12, 13])).toEqual([
      1, 2, 3, 4, 11, 12, 13
    ])
  })

  it('Merges more arrays', () => {
    expect(
      mergeArrays(
        [1, 2, 3, 4],
        [11, 12, 13],
        [22, 23, 24],
        [33, 22, 35],
        [44, 45, 46],
        [55, 56, 57],
        [66, 67, 68]
      )
    ).toEqual([
      1, 2, 3, 4, 11, 12, 13, 22, 23, 24, 33, 22, 35, 44, 45, 46, 55, 56, 57,
      66, 67, 68
    ])
  })
})

describe('mergeArraysUnique', () => {
  it('Merges two arrays with no duplicates', () => {
    expect(mergeArraysUnique([1, 2, 3, 4], [11, 12, 13])).toEqual([
      1, 2, 3, 4, 11, 12, 13
    ])
  })

  it('Merges two arrays with duplicates', () => {
    expect(mergeArraysUnique([1, 2, 3, 4], [11, 2, 4])).toEqual([
      1, 2, 3, 4, 11
    ])
  })

  it('Merges more arrays with duplicates', () => {
    expect(
      mergeArraysUnique([1, 2, 2, 4], [11, 2, 1], [2, 23, 24], [3, 22, 4])
    ).toEqual([1, 2, 4, 11, 23, 24, 3, 22])
  })
})

describe('sortBy', () => {
  const array = [
    { quantity: 341, productId: 1001 },
    { quantity: 456, productId: 212 },
    { quantity: 231, productId: 231 },
    { quantity: 102, productId: 962 },
    { quantity: 388, productId: 1293 },
    { quantity: 299, productId: 173 }
  ]

  it('Sorts an array in ascending order', () => {
    expect(sortBy(array, 'quantity', 'ASC')).toEqual([
      { quantity: 102, productId: 962 },
      { quantity: 231, productId: 231 },
      { quantity: 299, productId: 173 },
      { quantity: 341, productId: 1001 },
      { quantity: 388, productId: 1293 },
      { quantity: 456, productId: 212 }
    ])
  })

  it('Sorts an array in descending order', () => {
    expect(sortBy(array, 'quantity', 'DESC')).toEqual([
      { quantity: 456, productId: 212 },
      { quantity: 388, productId: 1293 },
      { quantity: 341, productId: 1001 },
      { quantity: 299, productId: 173 },
      { quantity: 231, productId: 231 },
      { quantity: 102, productId: 962 }
    ])
  })
})

describe('keyBy', () => {
  it('Creates an object with the specified key', () => {
    expect(keyBy(usersSimple, 'id')).toEqual({
      1: { id: 1, name: 'Jane', age: 44 },
      2: { id: 2, name: 'Mary', age: 50 },
      3: { id: 3, name: 'Jane', age: 23 },
      4: { id: 4, name: 'Lucy', age: 34 },
      5: { id: 5, name: 'Mark', age: 44 },
      6: { id: 6, name: 'Vincent', age: 50 }
    })
  })
})

describe('replaceItemAtIndex', () => {
  it('Replaces the item at the specified index', () => {
    expect(
      replaceItemAtIndex(usersSimple, { id: 99, name: 'Carl', age: 33 }, 4)
    ).toEqual([
      { id: 1, name: 'Jane', age: 44 },
      { id: 2, name: 'Mary', age: 50 },
      { id: 3, name: 'Jane', age: 23 },
      { id: 4, name: 'Lucy', age: 34 },
      { id: 99, name: 'Carl', age: 33 },
      { id: 6, name: 'Vincent', age: 50 }
    ])
  })
})

describe('addExtraProperties', () => {
  it('Adds one property', () => {
    const originalArray = [{ id: 44 }, { id: 99 }, { id: 100 }]
    expect(addExtraProperties(originalArray, { extra: true })).toEqual([
      { id: 44, extra: true },
      { id: 99, extra: true },
      { id: 100, extra: true }
    ])
    expect(originalArray).toEqual([{ id: 44 }, { id: 99 }, { id: 100 }])
  })

  it('Adds two properties', () => {
    const originalArray = [{ id: 44 }, { id: 99 }, { id: 100 }]
    expect(
      addExtraProperties(originalArray, { extra: true, limit: 1000 })
    ).toEqual([
      { id: 44, extra: true, limit: 1000 },
      { id: 99, extra: true, limit: 1000 },
      { id: 100, extra: true, limit: 1000 }
    ])
    expect(originalArray).toEqual([{ id: 44 }, { id: 99 }, { id: 100 }])
  })
})

describe('removeProperties', () => {
  it('Removes the specified properties', () => {
    const originalArray = [
      {
        id: 'x1',
        email: 'john@email.it',
        address: { city: 'Rome', street: 'S' }
      },
      {
        id: 'x2',
        email: 'mary@post.it',
        address: { city: 'Milan', street: 'C' }
      },
      {
        id: 'x3',
        email: 'lucy@email.com',
        address: { city: 'Milan', street: 'S' }
      }
    ]
    expect(removeProperties(originalArray, ['address', 'id'])).toEqual([
      { email: 'john@email.it' },
      { email: 'mary@post.it' },
      { email: 'lucy@email.com' }
    ])
    expect(originalArray).toEqual([
      {
        id: 'x1',
        email: 'john@email.it',
        address: { city: 'Rome', street: 'S' }
      },
      {
        id: 'x2',
        email: 'mary@post.it',
        address: { city: 'Milan', street: 'C' }
      },
      {
        id: 'x3',
        email: 'lucy@email.com',
        address: { city: 'Milan', street: 'S' }
      }
    ])
  })
})

describe('setSelected', () => {
  it('Sets the selected items correctly', () => {
    const originalArray = [
      { id: 'x1', email: 'john@email.it' },
      { id: 'x2', email: 'mary@post.it' },
      { id: 'x3', email: 'lucy@email.com' }
    ]
    expect(setSelected(originalArray, ['x1', 'x3'])).toEqual([
      { id: 'x1', email: 'john@email.it', selected: true },
      { id: 'x2', email: 'mary@post.it' },
      { id: 'x3', email: 'lucy@email.com', selected: true }
    ])
    expect(originalArray).toEqual([
      { id: 'x1', email: 'john@email.it' },
      { id: 'x2', email: 'mary@post.it' },
      { id: 'x3', email: 'lucy@email.com' }
    ])
  })
})

describe('mapTo', () => {
  it('Maps the array using the specified key', () => {
    expect(mapTo(usersSimple, 'name')).toEqual([
      'Jane',
      'Mary',
      'Jane',
      'Lucy',
      'Mark',
      'Vincent'
    ])
  })

  it('Handles a key that does not exist', () => {
    expect(mapTo(usersSimple, 'city')).toBe(usersSimple)
  })
})

describe('areItemsValid', () => {
  it('Tests a condition that is true for every element', () => {
    expect(areItemsValid(usersSimple, (user) => user.age > 20)).toEqual(true)
  })

  it('Tests a condition that is not true for every element', () => {
    expect(areItemsValid(usersSimple, (user) => user.age > 40)).toEqual(false)
  })
})

describe('populate', () => {
  it('Populates the first array with elements from the second array based on the value of "key"', () => {
    expect(populate([2, 4, 1, 5], usersSimple, 'id')).toEqual([
      { id: 2, name: 'Mary', age: 50 },
      { id: 4, name: 'Lucy', age: 34 },
      { id: 1, name: 'Jane', age: 44 },
      { id: 5, name: 'Mark', age: 44 }
    ])
  })
})

describe('getTotal', () => {
  it('Gets the correct total price with both discounts', () => {
    expect(getTotal(products, { default: 5, special: 10 })).toEqual(1403.4)
  })

  it('Gets the correct total price with only special discount', () => {
    expect(getTotal(products, { special: 20 })).toEqual(1433.2)
  })

  it('Gets the correct total price with no discount', () => {
    expect(getTotal(products, {})).toEqual(1493)
  })
})

describe('populatePosts', () => {
  it('Correctly populates posts with all data', () => {
    const result = [
      {
        user: {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz'
        },
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        comments: [
          {
            id: 1,
            name: 'id labore ex et quam laborum',
            user: {
              id: 2,
              name: 'Ervin Howell',
              username: 'Antonette',
              email: 'Shanna@melissa.tv'
            },
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
          },
          {
            id: 3,
            name: 'alias odio sit',
            user: {
              id: 3,
              name: 'lementine Bauch',
              username: 'Samantha',
              email: 'Nathan@yesenia.net'
            },
            body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
          }
        ]
      },
      {
        user: {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz'
        },
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        comments: [
          {
            id: 2,
            name: 'quo vero reiciendis velit similique earum',
            user: {
              id: 3,
              name: 'lementine Bauch',
              username: 'Samantha',
              email: 'Nathan@yesenia.net'
            },
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
          }
        ]
      },
      {
        user: {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv'
        },
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        comments: []
      }
    ]
    expect(populatePosts(posts, comments, users)).toEqual(result)
  })
})

describe('map', () => {
  it('Correctly maps an array of numbers', () => {
    expect(map([1, 2, 3, 4, 5], (n) => n * 2)).toEqual([2, 4, 6, 8, 10])
  })

  it('Correctly maps an array of objects', () => {
    expect(
      map(products, ({ product, price }) => `${product}: ${price}$`)
    ).toEqual(['P1: 50$', 'P90: 120$', 'P8: 78$', 'P12: 189$', 'P33: 199$'])
  })

  it('Correcly maps an array taking into account indexes', () => {
    expect(map([1, 2, 3, 4, 5], (n, i) => n * i)).toEqual([0, 2, 6, 12, 20])
  })
})

describe('filter', () => {
  it('Correctly filters an array of numbers', () => {
    expect(filter([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toEqual([2, 4])
  })

  it('Correctly filters an array of objects', () => {
    expect(filter(usersSimple, ({ age }) => age < 30)).toEqual([
      { id: 3, name: 'Jane', age: 23 }
    ])
  })

  it('Correcly filters an array taking into account indexes', () => {
    expect(filter([1, 2, 3, 4, 5], (_, i) => i > 0)).toEqual([2, 3, 4, 5])
  })
})

describe('some', () => {
  it('Returns true when at least one element satisfies the condition', () => {
    expect(
      some([null, 0, undefined, 'hello', null], (x) => typeof x === 'string')
    ).toEqual(true)
  })

  it('Returns false when no element satisfies the condition', () => {
    expect(some([1, 2, 3], (x) => typeof x === 'string')).toEqual(false)
  })
})

describe('every', () => {
  it('Returns true when all elements satisfy the condition', () => {
    expect(every([1, 2, 3], (n) => Number.isFinite(n))).toEqual(true)
  })

  it('Returns false when not all elements satisfy the condition', () => {
    expect(every(['A', 'B', 3], (x) => typeof x === 'string')).toEqual(false)
  })
})

describe('reduce', () => {
  it('Correctly reduces an array of numbers with an initial value', () => {
    expect(
      reduce([1, 2, 3, 4, 5], (acc, n) => acc + n),
      100
    ).toEqual(115)
  })

  it('Correctly reduces an array of numbers without an initial value', () => {
    expect(reduce([1, 2, 3, 4, 5], (acc, n) => acc + n)).toEqual(15)
  })

  it('Correctly reduces an array into an object', () => {
    expect(
      reduce(
        [
          { id: 'A', name: 'B' },
          { id: 'B', name: 'C' },
          { id: 'D', name: 'E' }
        ],
        (acc, value) => ({ ...acc, [value.id]: value }),
        {}
      )
    ).toEqual({
      A: { id: 'A', name: 'B' },
      B: { id: 'B', name: 'C' },
      D: { id: 'D', name: 'E' }
    })
  })

  it('Correctly reduces an array into a string taking into account indexes', () => {
    expect(
      reduce(
        ['A', 'B', 'C', 'D', 'E'],
        (acc, value, i) => `${acc}${i + 1}. ${value}; `,
        ''
      )
    ).toEqual('1. A; 2. B; 3. C; 4. D; 5. E; ')
  })
})
