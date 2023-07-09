import { signOut } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

async function checkUser(): Promise<string> {
  const user = auth.currentUser
  if (user) {
    return user.uid
  }

  return ''
}

async function logout (): Promise<void> {
  try {
    await signOut(auth)
  } catch (e) {
    console.log(e)
  }
}

export {
  checkUser,
  logout
}