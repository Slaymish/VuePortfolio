import { firebaseApp } from "./firebase";
import { getFirestore, collection, getDocs, type DocumentData } from "firebase/firestore/lite";

async function getProjects() {
  const db = getFirestore(firebaseApp);
  const querySnapshot = await getDocs(collection(db, "projects"));
  const projects: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    projects.push(doc.data());
  });
  console.log(projects);
  return projects;
}

export default getProjects;
