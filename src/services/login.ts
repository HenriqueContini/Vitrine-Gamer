import { signInWithEmailAndPassword } from "firebase/auth";
import FormResponse from "../interfaces/FormResponse";
import { auth } from "../configs/firebaseConfig";
import { FirebaseError } from "firebase/app";

async function login(email: string, password: string): Promise<FormResponse> {
  try {
    await signInWithEmailAndPassword(auth, email, password)

    return {error: false}
  } catch (e) {
    if (e instanceof FirebaseError) {
      let errorMsg = ''
      e.code === 'auth/wrong-password' ? errorMsg = 'Senha incorreta' : null
      e.code === 'auth/user-not-found' ? errorMsg = 'Usuário não encontrado' : null

      return { error: true, msg: errorMsg }
    }

    return {error: true, msg: 'Ocorreu um erro, tente novamente'}
  }
}

/* auth.currentUser.uid => Salva no banco de dados e no listener*/

export default login