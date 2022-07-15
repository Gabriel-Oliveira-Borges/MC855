import firestore from '../config/firebase'
import { updateDoc, doc, getDoc } from 'firebase/firestore'

async function getPage(page) {
    const document = doc(firestore, "pages", page)
    const docs = await getDoc(document)
    return docs.data()
}

async function updatePageBody(page, key, value) {
    const pageDoc = doc(firestore, "pages", page)
    return await updateDoc(pageDoc, {
        [key]: value
    })
}

export { getPage, updatePageBody };