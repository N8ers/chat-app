import axios from 'axios'

const baseURL = 'http://localhost:3000'

export const createConversationMember = async function (userId, conversationId) {
  return axios.post(`${baseURL}/conversation_members`, {
    user_id: userId,
    conversation_id: conversationId
  })
  .then((res) => res.data)
  .catch((err) => err)
}

export const createConversation = async function () {
  return axios.post(`${baseURL}/conversations`)
      .then((res) => res.data)
      .catch((err) => err)
}

export default {
  createConversationMember
}