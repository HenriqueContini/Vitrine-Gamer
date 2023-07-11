import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import ApiResponse from "../interfaces/ApiResponse";
import Game from "../interfaces/Game";
import { checkUser } from "./user";
import { db } from "../configs/firebaseConfig";
import { getDocId } from "./firebaseData";

const tableName = 'favoriteGames'

async function addStars(game: Game, stars: number): Promise<ApiResponse> {
  try {
    const user = await checkUser()

    if (!user) {
      return { error: true, msg: 'É necessário estar logado para poder favoritar!' }
    }

    const docId = await getDocId(user, game.id)

    if (!docId) {
      await addDoc(collection(db, tableName), { ...game, user: user, stars: stars });
      return { error: false }
    }

    await updateDoc(doc(db, tableName, docId), {
      stars: stars
    });

    return { error: false }
  } catch (error) {
    console.log(error)
    return { error: true }
  }
}

export {
  addStars
}