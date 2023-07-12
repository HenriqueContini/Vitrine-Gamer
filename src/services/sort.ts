import Game from "../interfaces/Game";

function sortByAsc(data: Game[]): Game[] {
  let newArr = [...data].sort((a, b) => {
    if (!a.stars) {
      a.stars = 0
    }

    if (!b.stars) {
      b.stars = 0
    }

    if (a.stars > b.stars) return -1;
    if (a.stars < b.stars) return 1;

    return 0
  })

  return newArr
}

function sortByDesc(data: Game[]): Game[] {
  let newArr = [...data].sort((a, b) => {
    if (!a.stars) {
      a.stars = 0
    }

    if (!b.stars) {
      b.stars = 0
    }

    if (a.stars > b.stars) return 1;
    if (a.stars < b.stars) return -1;

    return 0
  })

  return newArr
}

export {
  sortByAsc,
  sortByDesc
}