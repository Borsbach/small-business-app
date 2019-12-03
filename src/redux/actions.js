export const addListing = (listing) => {
  return {
    type: 'ADD_LISTING',
    value: listing
  }
}

export const removeListing = (index) => {
  return {
    type: 'REMOVE_LISTING',
    value: index
  }
}

export const userLogin = (user) => {
  return {
    type: 'LOGIN',
    value: user
  }
}

export const authenticate = (user, boolean) => {
  return {
    type: 'AUTHENTICATE',
    value: {
      boolean: boolean,
      user: user
    } 
  }
}