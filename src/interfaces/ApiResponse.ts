import Game from "./Game"

interface ApiResponse {
  error: boolean
  data?: Game[]
  msg?: string
}

export default ApiResponse