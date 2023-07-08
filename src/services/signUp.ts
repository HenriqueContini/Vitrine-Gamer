import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import FormResponse from "../interfaces/FormResponse";
import { FirebaseError } from "firebase/app";

async function signUp(email: string, password: string): Promise<FormResponse> {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    return {error: false}
  } catch (e) {
    if (e instanceof FirebaseError) {
      let errorMsg = ''
      e.code === 'auth/email-already-in-use' ? errorMsg = 'Email já está em uso' : null
      e.code === 'auth/weak-password' ? errorMsg = 'A senha deve conter, no mínimo, 6 caracteres' : null

      return { error: true, msg: errorMsg }
    }

    return {error: true, msg: 'Ocorreu um erro, tente novamente'}
  }
}

export default signUp