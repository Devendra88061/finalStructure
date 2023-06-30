/*
 * This is the Entry point of our application
 *
 */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { addUsersss } from "./controller/user/userController";


// initialize firebase Application
admin.initializeApp();
export const db = admin.firestore();

//firebase function
  export const addNewUsers = functions.https
  .onRequest(async (request:any)=>{
    await addUsersss(request);
})