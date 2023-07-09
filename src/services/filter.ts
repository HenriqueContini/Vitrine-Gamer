import Game from "../interfaces/Game";

function filter(arr: Game[], query: string, genre: string = 'all') {
  let newArr:Game[] = arr

  if (query.length > 0) {
    newArr = arr.filter(game => game.title.toUpperCase().includes(query.toUpperCase()))
  }

  if (genre === 'all') {
    return newArr
  }

  return newArr = newArr.filter(game => game.genre === genre)
}

export default filter