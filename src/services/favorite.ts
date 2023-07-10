import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import Game from "../interfaces/Game";
import { checkUser } from "./user";
import ApiResponse from "../interfaces/ApiResponse";

const tableName = 'favoriteGames'

async function getAllFavorites(): Promise<ApiResponse>{
  try {
    const user = await checkUser()

    if (!user) {
      return {error: true, msg: 'É necessário estar logado para visualizar os jogos favoritados'}
    }

    const response = await getDocs(query(collection(db, tableName), where("user", "==", user)))
    const data: any[] = []
  
    response.forEach((doc) => {
      data.push(doc.data())
    });

    return {data: data, error: false}
  } catch (error) {
    console.log(error)
    return {error: true, msg: "Ocorreu um erro ao buscar os dados"}
  }
}

async function addFavorite(game: Game, stars: number = 0) {
  try {
    const user = await checkUser()

    if (!user) {
      return {error: true, msg: 'É necessário estar logado para poder curtir!'}
    }
    
    await addDoc(collection(db, tableName), {...game, user: user, isFavorite: true, stars: stars});
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