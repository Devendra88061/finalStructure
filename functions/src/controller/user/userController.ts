import { users_collection } from "../../common/collections/collection_Name";
import { db, errorMessage, successMessage } from "../../common/strings/strings";

export const addUsersss = async (request: any) => {
    const usersCollectionRef = db.collection(users_collection);
    const user = request.body;
    // Add the new user to the collection
    usersCollectionRef.add(user)
      .then((docRef) => {
        console.log(successMessage.userMessage,user);
      })
      .catch((error) => {
        console.error(errorMessage.userError, error);
      });
  };


