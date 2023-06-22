import Game from "./game"

interface ApiResponse {
  data?: Game[]
  status?: number
  code?: string
}

export default ApiResponse