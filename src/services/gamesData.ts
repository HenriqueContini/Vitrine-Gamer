import axios, { AxiosResponse, isAxiosError } from "axios"
import Game from "../interfaces/Game"
import ApiResponse from "../interfaces/ApiResponse"
import { getAllData } from "./firebaseData"

const URL = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data'
const statusArr = [500, 502, 503, 504, 507, 508, 509]

async function getGamesData(): Promise<ApiResponse> {
  try {
    const response: AxiosResponse<Game[]> = await axios.get(URL, {
      headers: {
        'dev-email-address': 'frontclient@gmail.com'
      },
      timeout: 5000
    })

    const update = await updateGamesData(response.data)

    if (update.error) {
      return {error: true, msg: update.msg}
    }

    return {data: update.data, error: false}
  } catch (error) {
    if (isAxiosError(error)) {
      if(error.code === 'ECONNABORTED') {
        return {error: true, msg: 'O servidor demorou para responder, tente mais tarde.'}
      } else if (error.status && statusArr.includes(error.status)) {
        return {error: true, msg: 'O servidor falhou em responder, tente recarregar a página.'}
      }
    }
    return {error: true, msg: 'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde.'}
  }
}

async function updateGamesData(data: Game[]): Promise<ApiResponse> {
  try {
    const firebaseGames = await getAllData()
    let newData: Game[] = data

    if (firebaseGames.data) {
      firebaseGames.data.map((frGame) => {
        newData.map((game) => {
          if (frGame.id === game.id) {
            game.isFavorite = frGame.isFavorite
            game.stars = frGame.stars
          }
        })
      })
    }

    return {data: newData, error: false}
  } catch (error) {
    return { error: true, msg: "Ocorreu um erro ao buscar os dados" }
  }
}

export {
  getGamesData,
  updateGamesData
}