import {
  cloneObject,
  mergeObjects,
  setPropery,
  toArray,
  filterObject,
  arrayToObject,
  getCachedValue,
  arrayToObjectDeep,
  hasValidProperty,
  normalizeObject,
  getTreeDepth,
  countTreeLeafNodes
} from './objects'

describe('cloneObject', () => {
  it('Clones a simple object making a separate copy', () => {
    const object = { name: 'John', age: 33, address: '5th Avenue' }
    expect(cloneObject(object)).toEqual({
      name: 'John',
      age: 33,
      address: '5th Avenue'
    })
    expect(cloneObject(object)).not.toBe(object)
  })
})

describe('mergeObjects', () => {
  it('Correctly merges two objects', () => {
    const object1 = { name: 'John', age: 33, address: '5th Avenue' }
    const object2 = { city: 'Rome', state: 'Italy' }
    expect(mergeObjects(object1, object2)).toEqual({
      name: 'John',
      age: 33,
      address: '5th Avenue',
      city: 'Rome',
      state: 'Italy'
    })
    expect(object1).toEqual({ name: 'John', age: 33, address: '5th Avenue' })
    expect(object2).toEqual({ city: 'Rome', state: 'Italy' })
  })
})

describe('setProperty', () => {
  it('Sets the specified property without modyfing the original object', () => {
    const object = { name: 'John', age: 33, address: '5th Avenue' }
    expect(setPropery(object, ['city', 'Rome'])).toEqual({
      name: 'John',
      age: 33,
      address: '5th Avenue',
      city: 'Rome'
    })
    expect(object).toEqual({ name: 'John', age: 33, address: '5th Avenue' })
  })
})

describe('toArray', () => {
  it('Converts the object into an array, keeping the key', () => {
    const object = {
      shajsa1: { name: 'John', age: 33, address: '5th Avenue' },
      sajhhu4: { name: 'Mary', age: 40, address: '3th Avenue' },
      xsjwee5: { name: 'Philip', age: 21, address: '2th Avenue' }
    }
    expect(toArray(object)).toEqual([
      { key: 'shajsa1', name: 'John', age: 33, address: '5th Avenue' },
      { key: 'sajhhu4', name: 'Mary', age: 40, address: '3th Avenue' },
      { key: 'xsjwee5', name: 'Philip', age: 21, address: '2th Avenue' }
    ])
  })
})

describe('filterObject', () => {
  it('Filters an object - 1', () => {
    const object = {
      productName: 'ABC',
      quantity: 40,
      price: 99.8,
      productDescription: 'Hello',
      productId: 11
    }
    expect(filterObject(object, (_, value) => Number.isFinite(value))).toEqual({
      quantity: 40,
      price: 99.8,
      productId: 11
    })
    expect(object).toEqual({
      productName: 'ABC',
      quantity: 40,
      price: 99.8,
      productDescription: 'Hello',
      productId: 11
    })
  })

  it('Filters an object - 2', () => {
    const object = {
      category: 'ABC',
      description: 'World',
      special: true,
      id: 99,
      items: [{ id: 22 }, { id: 99 }]
    }
    expect(
      filterObject(object, (key, value) => key === 'id' || Array.isArray(value))
    ).toEqual({
      id: 99,
      items: [{ id: 22 }, { id: 99 }]
    })
    expect(object).toEqual({
      category: 'ABC',
      description: 'World',
      special: true,
      id: 99,
      items: [{ id: 22 }, { id: 99 }]
    })
  })
})

describe('getCachedValue', () => {
  it('Caches the value correctly', () => {
    const cache = {}

    const getTotalValue = jest.fn(() => 99)
    const getUserValue = jest.fn(() => 'John')

    expect(getCachedValue('total', getTotalValue, cache)).toEqual(99)
    expect(getCachedValue('user', getUserValue, cache)).toEqual('John')
    expect(getCachedValue('total', getTotalValue, cache)).toEqual(99)
    expect(getCachedValue('total', getTotalValue, cache)).toEqual(99)
    expect(getCachedValue('user', getUserValue, cache)).toEqual('John')

    expect(getTotalValue).toHaveBeenCalledTimes(1)
    expect(getUserValue).toHaveBeenCalledTimes(1)
  })
})

describe('arrayToObject', () => {
  it('Converts a two-dimensional array into an object', () => {
    const array = [
      ['name', 'Mary'],
      ['age', 44],
      ['address', '6th Avenue'],
      ['cars', [{ id: 'c1' }]]
    ]
    expect(arrayToObject(array)).toEqual({
      name: 'Mary',
      age: 44,
      address: '6th Avenue',
      cars: [{ id: 'c1' }]
    })
  })
})

describe('arrayToObjectDeep', () => {
  it('Converts a n-dimensional array into an object, deeply', () => {
    const array = [
      ['name', 'John'],
      ['age', 22],
      [
        'car',
        [
          ['year', 2000],
          ['manufacturer', 'Ford'],
          [
            'optionals',
            [
              ['op1', true],
              ['op2', false]
            ]
          ]
        ]
      ]
    ]
    const result = {
      name: 'John',
      age: 22,
      car: {
        year: 2000,
        manufacturer: 'Ford',
        optionals: { op1: true, op2: false }
      }
    }
    expect(arrayToObjectDeep(array)).toEqual(result)
  })
})

describe('hasValidProperty', () => {
  const object = {
    name: 'Jane',
    age: 88,
    children: [{ name: 'Igor' }],
    pets: 3
  }

  it('Returns true with a valid property - 1', () => {
    expect(
      hasValidProperty(
        object,
        (_, value) => Number.isFinite(value) && value < 5
      )
    ).toEqual(true)
  })

  it('Returns true with a valid property - 2', () => {
    expect(
      hasValidProperty(
        object,
        (key, value) => key === 'children' && value.length > 0
      )
    ).toEqual(true)
  })

  it('Returns false with no valid property', () => {
    expect(
      hasValidProperty(
        object,
        (_, value) => Number.isFinite(value) && value > 100
      )
    ).toEqual(false)
  })
})

describe('normalizeObject', () => {
  it('Normalizes a simple object', () => {
    const object = {
      id: 1,
      carName: 'P1',
      carDescription: 'Fast car',
      engine: {
        id: 9,
        horsepower: 400,
        manufacturer: 'Ford'
      },
      owner: {
        id: 3,
        name: 'William'
      }
    }
    const result = [
      {
        id: 1,
        carName: 'P1',
        carDescription: 'Fast car',
        engineId: 9,
        ownerId: 3
      },
      {
        3: { id: 3, name: 'William' },
        9: { id: 9, horsepower: 400, manufacturer: 'Ford' }
      }
    ]
    expect(normalizeObject(object)).toEqual(result)
  })

  it('Normalizes a complex object', () => {
    const object = {
      id: 1,
      carName: 'P1',
      carDescription: 'Fast car',
      engine: {
        id: 9,
        horsepower: 400,
        manufacturer: {
          id: 88,
          name: 'Ford',
          headquarters: 'USA',
          ceo: {
            id: 101,
            name: 'Shrek',
            dateOfBirth: 0
          }
        }
      },
      owner: {
        id: 3,
        name: 'William',
        cityOfBirth: {
          id: 44,
          name: 'New York',
          inhabitants: 20000
        }
      }
    }
    const result = [
      {
        id: 1,
        carName: 'P1',
        carDescription: 'Fast car',
        engineId: 9,
        ownerId: 3
      },
      {
        3: { id: 3, name: 'William', cityOfBirthId: 44 },
        9: { id: 9, horsepower: 400, manufacturerId: 88 },
        44: { id: 44, name: 'New York', inhabitants: 20000 },
        88: { id: 88, name: 'Ford', headquarters: 'USA', ceoId: 101 },
        101: { id: 101, name: 'Shrek', dateOfBirth: 0 }
      }
    ]
    expect(normalizeObject(object)).toEqual(result)
  })
})

const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        {
          value: 'E',
          children: [{ value: 'K' }, { value: 'L' }, { value: 'M' }]
        },
        { value: 'F', children: [{ value: 'N' }, { value: 'O' }] }
      ]
    },
    {
      value: 'C',
      children: [
        { value: 'G', children: [{ value: 'P' }] },
        { value: 'H', children: [{ value: 'Q' }, { value: 'R' }] }
      ]
    },
    {
      value: 'D',
      children: [
        {
          value: 'I',
          children: [
            { value: 'S' },
            { value: 'T' },
            { value: 'U', children: [{ value: 'X' }, { value: 'Y' }] }
          ]
        },
        { value: 'J', children: [{ value: 'V' }, { value: 'W' }] }
      ]
    }
  ]
}

describe('getTreeDepth', () => {
  it('Gets the correct depth for the tree', () => {
    expect(getTreeDepth(tree)).toEqual(5)
  })
})

describe('countTreeLeafNodes', () => {
  it('Gets the correct number of leaf nodes', () => {
    expect(countTreeLeafNodes(tree)).toEqual(14)
  })
})
