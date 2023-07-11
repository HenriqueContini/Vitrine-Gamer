import { collection, getDocs, addDoc, query, where, updateDoc, doc } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import Game from "../interfaces/Game";
import { checkUser } from "./user";
import ApiResponse from "../interfaces/ApiResponse";
import { getDocId } from "./firebaseData";

const tableName = 'favoriteGames'

async function getAllFavorites(): Promise<ApiResponse> {
  try {
    const user = await checkUser()

    if (!user) {
      return { error: true, msg: 'É necessário estar logado para visualizar os jogos favoritados' }
    }

    const q = query(collection(db, tableName), where("user", "==", user), where("isFavorite", "==", true))
    const response = await getDocs(q)
    const data: any[] = []

    response.forEach((doc) => {
      data.push(doc.data())
    });

    return { data: data, error: false }
  } catch (error) {
    console.log(error)
    return { error: true, msg: "Ocorreu um erro ao buscar os dados" }
  }
}

async function addFavorite(game: Game): Promise<ApiResponse> {
  try {
    const user = await checkUser()

    if (!user) {
      return { error: true, msg: 'É necessário estar logado para poder curtir!' }
    }

    const docId = await getDocId(user, game.id)

    if (!docId) {
      await addDoc(collection(db, tableName), { ...game, user: user, isFavorite: true, stars: 0 });
      return { error: false }
    }
    
    await updateDoc(doc(db, tableName, docId), {
      isFavorite: true
    });

    return { error: false }
  } catch (error) {
    console.log(error)
    return { error: true }
  }
}

async function deleteFavorite(game: Game): Promise<ApiResponse> {
  try {
    const user = await checkUser()

    if (!user) {
      return { error: true, msg: 'É necessário estar logado para visualizar os jogos favoritados' }
    }

    const docId = await getDocId(user, game.id)

    if (!docId) {
      return { error: true, msg: 'Registro não encontrado' }
    }
    
    await updateDoc(doc(db, tableName, docId), {
      isFavorite: false
    });

    return {error: false}
  } catch (error) {
    console.log(error)
    return { error: true }
  }
}

export {
  getAllFavorites,
  addFavorite,
  deleteFavorite
}