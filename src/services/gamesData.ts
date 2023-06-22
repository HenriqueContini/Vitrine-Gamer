import axios, { AxiosResponse, isAxiosError } from "axios"
import Game from "../interfaces/Game"
import ApiResponse from "../interfaces/ApiResponse"

const URL = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data'

async function getGamesData(): Promise<ApiResponse> {
  try {
    const response: AxiosResponse<Game[]> = await axios.get(URL, {
      headers: {
        'dev-email-address': 'henriquecontini03@gmail.com'
      },
      timeout: 5000
    })
    console.log('Dados')
    return {data: response.data, error: false}
  } catch (error) {
    if (isAxiosError(error)) {
      if(error.code === 'ECONNABORTED') {
        console.log('Abortado')
        return {error: true, msg: 'O servidor demorou para responder, tente mais tarde.'}
      } else if (error.status && error.status >= 500 && error.status <= 509) {
        console.log('Faixa 500')
        return {error: true, msg: 'O servidor falhou em responder, tente recarregar a página.'}
      }
    }
    console.log('Outros erros')
    return {error: true, msg: 'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde.'}
  }
}

export default getGamesData