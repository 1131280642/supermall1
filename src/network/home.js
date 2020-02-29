import axios from './axios'

export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}

