import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import ApiResponse from "../interfaces/ApiResponse";
import { checkUser } from "./user";

const tableName = 'favoriteGames'

async function getAllData(): Promise<ApiResponse> {
  try {
    const user = await checkUser()

    if (!user) {
      return { error: true, msg: 'É necessário estar logado' }
    }

    const q = query(collection(db, tableName), where("user", "==", user))
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

async function getDocId(user: string, gameId: number): Promise<string | void> {
  try {
    const q = query(collection(db, tableName), where("user", "==", user), where("id", '==', gameId), limit(1))
    const response = await getDocs(q)

    let favoriteId = ''
    response.forEach(async (item) => {
      favoriteId = item.id
    });

    return favoriteId
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllData,
  getDocId
}