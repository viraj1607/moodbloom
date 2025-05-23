// services/auth.ts
import {
    Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebasConfig";

export const signUpWithEmail = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    // Create user with email & password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update the display name
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error("Sign-up error:", error.message);
    return { success: false, error: error.message };
  }
};

type SignInResponse =
  | { success: true; user: UserCredential }
  | { success: false; error: string };

  export const signInWithEmail = async (
  email: string,
  password: string
): Promise<SignInResponse> => {
  try {
    const userSignIn = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userSignIn };
  } catch (err: any) {
    console.error("Sign-in error:", err.message);
    return { success: false, error: err.message };
  }
};