import { signOut } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

async function logout (): Promise<void> {
  try {
    await signOut(auth)
  } catch (e) {
    console.log(e)
  }
}

export default logout