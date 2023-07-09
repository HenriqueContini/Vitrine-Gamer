import { signOut } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

async function checkUser() {
  const user = auth.currentUser
  if (user) {
    return user.uid
  }

  return null
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