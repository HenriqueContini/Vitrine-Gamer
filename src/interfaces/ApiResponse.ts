import Game from "./Game"

interface ApiResponse {
  data?: Game[]
  status?: number
  code?: string
}

export default ApiResponse