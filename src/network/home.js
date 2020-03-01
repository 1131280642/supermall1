import axios from './axios'

export const BANNER = 'banner'

export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}

