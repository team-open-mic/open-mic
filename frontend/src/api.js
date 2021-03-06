// this is where we have every single API request - each API request will be its own function.

import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://team-open-mic.herokuapp.com/'
})

export function registration (username, password) {
  return apiUrl
    .post('auth/users/', {
      username: username,
      password: password
    })
    .then(result => {
      return login(username, password)
    })
    .catch(error => {
      let errors = []
      if (error.response) {
        const data = error.response.data
        if (data.username) {
          errors = errors.concat(data.username)
        }
        if (data.password) {
          errors = errors.concat(data.password)
        }
      }

      if (errors.length === 0) {
        errors.push('There was a problem registering.')
      }
      const err = new Error(errors[0])
      throw err
    })
}

export function login (username, password) {
  return apiUrl
    .post('auth/token/login/', {
      username: username,
      password: password
    })
    .then(results => results.data)
    .catch(error => {
      console.log({ error })
      if (error.response) {
        if (error.response.data.non_field_errors) {
          throw new Error(error.response.data.non_field_errors.join(' '))
        }
      }
      throw new Error('Something went wrong.')
    })
}

export function getProfiles (token) {
  return apiUrl
    .get('api/userprofiles/', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(results => results.data)
}

// ************************************************
// ******* POST for data WITHOUT formData *********
// ************************************************

export function postProfiles (token, profile) {
  return apiUrl.post('api/userprofiles/', profile, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      // console.log('api data', res.data)
      return res.data
    })
    .catch(error => {
      let errors = []
      if (error.response) {
        const data = error.response.data
        if (data.username) {
          errors = errors.concat(data.username)
        }
        if (data.password) {
          errors = errors.concat(data.password)
        }
      }

      if (errors.length === 0) {
        errors.push('There was a problem registering.')
      }
      const err = new Error(errors[0])
      throw err
    })
}

// ************************************************
// ******* PUT formData for image upload *********
// ************************************************
export function uploadImage (token, image, pk) {
  return apiUrl.put(`api/userprofiles/${pk}/`, image, {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      // console.log('image api return data', res.data)
      return res.data
    })
}

export function getProfile (token, pk) {
  return apiUrl.get(`api/userprofiles/${pk}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}

export function deleteProfile (token, pk) {
  return apiUrl
    .delete(`users/${pk}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => res.data)
}

export function updateProfile (token, updatedProfile, pk) {
  return apiUrl
    .put(`api/userprofiles/${pk}/`, updatedProfile, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => {
      // console.log('res.data api', res.data)
      return res.data
    })
}

export function getUserProfile (token) {
  return apiUrl.get('api/userprofiles/me/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      // console.log('user api', res.data)
      return res.data[0]
    })
}

// export function createMessage (token, pk) {
//   // return apiUrl.post('/')
// }

export function getMessages (token) {
  return apiUrl.get('api/messages/mine/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      return res.data
    })
}

export function sendMessage (token, date, username, messageReceiverUser, name, messageReceiverName, newMessageSubject, newMessageContent) {
  console.log('token, message, date', token, date)
  return apiUrl.post('api/messages/', {
    sender: username,
    receiver: messageReceiverUser,
    name: name,
    receiver_name: messageReceiverName,
    subject: newMessageSubject,
    content: newMessageContent,
    created_at: date
  }, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => {
      return res.data
    })
}

export function updateMessage (token, id, updateRead) {
  return apiUrl.put(`api/messages/${id}/`, updateRead, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}

export function deleteMessage (token, id) {
  return apiUrl.delete(`api/messages/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}

export function getConnections (token) {
  return apiUrl.get('api/users/me/', {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}

export function searchProfiles (token, status, location, genre, vacancy, instrument, wantedInstrument) {
  return apiUrl.get(`api/userprofiles/?individualorband=${status}&location=${location}&genres__name=${genre}&vacancy=${vacancy}&instruments__name=${instrument}&wantedinstruments__name=${wantedInstrument}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}

export function addFollower (token, user) {
  return apiUrl.post('api/connections/', {
    following_user: user
  }, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}

export function deleteFollower (token, id) {
  return apiUrl.delete(`api/connections/${id}/`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.data)
}
