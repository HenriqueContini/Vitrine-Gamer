interface Game {
  id: number
  title: string
  thumbnail: string
  genre: string
  game_url: string
  developer: string
  short_description: string
  release_date: string
  isFavorite?: boolean
  stars?: number
}

export default Game