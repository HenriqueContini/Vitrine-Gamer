import axios, { AxiosResponse, isAxiosError } from "axios"
import Game from "../interfaces/Game"
import ApiResponse from "../interfaces/ApiResponse"

const URL = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data'

async function getGamesData(): Promise<ApiResponse | undefined> {
  try {
    const response: AxiosResponse<Game[]> = await axios.get(URL, {
      headers: {
        'dev-email-address': 'henriquecontini03@gmail.com'
      },
      timeout: 5000
    })
    return response
  } catch (error) {
    if (isAxiosError(error)) {
      
      return {status: error.status, code: error.code}
    }

    console.log(error)
  }
}

export default getGamesData