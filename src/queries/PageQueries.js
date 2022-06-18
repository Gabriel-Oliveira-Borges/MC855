import firestore from '../config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

async function getPage(page) {
    const q = query(collection(firestore, "pages"), where("page", "==", page));
    const docs = await getDocs(q);
    var documents = []
    docs.forEach((doc) => documents.push(doc.data()))
    return documents[0]
}

export { getPage };