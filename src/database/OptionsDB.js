import firestore from '../config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

async function getOptions(page) {
    const q = query(collection(firestore, "options"), where("page", "==", page));
    const docs = await getDocs(q);
    var documents = []
    docs.forEach((doc) => documents.push(doc.data()))
    return documents[0]
}

export { getOptions };