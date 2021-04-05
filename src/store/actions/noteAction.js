
export const addNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favorite: false,
            createAt: new Date()
        })
        .then(() => {
            console.log(`add the note successfully!`)
        })
        .catch(err => {
            console.log('add the note failed due to err: ', err)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
                .then(() => {
                    console.log(`delete the note successfully!`)
                })
                .catch(err => {
                    console.log('delete the note failed due to err: ', err)
                })
    }
}