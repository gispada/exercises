import {
  users,
  changeUsersAddress,
  removeAddressCoordinates,
  removeCompanyInfo,
  addNewUser,
  convertUsersGeoToNumber
} from './immutability'

describe('changeUsersAddress', () => {
  it('Changes the address immutably', () => {
    const newUsers = changeUsersAddress(users, {
      city: 'London',
      suite: 'Suite 999'
    })
    expect(newUsers).toEqual([
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 999',
          city: 'London',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      }
    ])
    expect(newUsers).not.toBe(users)
  })
})

describe('removeAddressCoordinates', () => {
  it('Removes coordinates immutably', () => {
    const newUsers = removeAddressCoordinates(users)
    expect(newUsers).toEqual([
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261'
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      }
    ])
    expect(newUsers).not.toBe(users)
  })
})

describe('removeCompanyInfo', () => {
  it('Removes company immutably', () => {
    const newUsers = removeCompanyInfo(users)
    expect(newUsers).toEqual([
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-648-3804',
        website: 'ambrose.net'
      }
    ])
    expect(newUsers).not.toBe(users)
  })
})

describe('addNewUser', () => {
  it('Adds a user immutably', () => {
    const newUser = {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      address: {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: {
          lat: '24.6463',
          lng: '-168.8889'
        }
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      company: {
        name: 'Yost and Sons',
        catchPhrase: 'Switchable contextually-based project',
        bs: 'aggregate real-time technologies'
      }
    }
    const newUsers = addNewUser(users, newUser)
    expect(newUsers).toEqual([
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232'
          }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      },
      newUser
    ])
    expect(newUsers).not.toBe(users)
  })
})

describe('convertUsersGeoToNumber', () => {
  it('Converts geo to numbers immutably', () => {
    const newUsers = convertUsersGeoToNumber(users)
    expect(newUsers).toEqual([
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261',
          geo: {
            lat: -38.2386,
            lng: 57.2232
          }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models'
        }
      }
    ])
    expect(newUsers).not.toBe(users)
  })
})
