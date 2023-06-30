/*
 * fixed string we are placed in this location
 * 1. Resonce message string
 * 2. To user mail id
 * 3. From user mail id
 * 4. Mail subject & etc
 */
import * as admin from "firebase-admin";

export const db = admin.firestore();
export const successMessage = {
  userMessage :"user created successfully!"
};

export const errorMessage = {
  userError : "error in adding user"
}