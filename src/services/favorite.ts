import { collection, getDocs, addDoc, query } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import Game from "../interfaces/Game";
import { checkUser } from "./user";

const tableName = 'favoriteGames'

async function getAllFavorites() {
  const data = await getDocs(query(collection(db, tableName)))
  const newData: any[] = []

  data.forEach((doc) => {
    newData.push(doc.data())
  });

  console.log(newData)
}

async function addFavorite(game: Game, stars: number = 0) {
  try {
    const user = await checkUser()
    if (user) {
      await addDoc(collection(db, tableName), {...game, user: user, isFavorite: true, stars: stars});
    }

    alert(user)
    return {error: false}
  } catch (error) {
    console.log(error)
    return {error: true}
  }
}

export {
  getAllFavorites,
  addFavorite
}