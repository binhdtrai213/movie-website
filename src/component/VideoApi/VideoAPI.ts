import axios from 'axios'

const http = 'https://640987e3d16b1f3ed6d54774.mockapi.io/binhdt/videos'

export const VideoAPI = {
  getAll: async () => {
    return await axios({
      method: 'get',
      url: http
    })
  },
  createVideo: async (data: any) => {
    return await axios({
      method: 'post',
      url: http,
      data
    })
  },
  deleteVideo: async (id: string) => {
    return await axios({
      method: 'delete',
      url: `${http}/${id}`,
    })
  }
}
