// https://dev.codewars.com/

import axios from 'axios'

const challenges = ref({})

export default function useOwner () {
  async function getUser () {
    const user = 'Drew-Macgibbon'
    const page = 0
    let data
    await axios.get(`https://www.codewars.com/api/v1/users/${user}/code-challenges/completed?page=${page}`)
      .then(res => challenges.value = res.data.data && console.log(res))
      .catch(err => console.error('getUser from Codewars', err))
  }

  return {
    getUser,
    challenges: computed(() => challenges.value)
  }
}
