import { addDoc, updateDoc, deleteDoc, collection, doc, FieldValue } from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
   clicks: 0
}

export async function addEntry(entry) {
   await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      clicks: entry.clicks,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid
   });
}

export async function updateEntry(entry, entryID) {
   // TODO: Create Mutation to Edit Entry

   await updateDoc(doc(db, "entries", entryID), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category
   });

}

export async function deleteEntry(entryID) {
   // TODO: Create Mutation to Delete Entry
   await deleteDoc(doc(db, "entries", entryID));
}

export async function clickEntry(entryID, numClicks, link) {
   await updateDoc(doc(db, "entries", entryID), {
      clicks: numClicks + 1
   });
   window.location.href = link;
}
