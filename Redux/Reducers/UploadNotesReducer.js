
const initialState = {}

const UploadNotesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPLOAD_NOTE': return state
        default: return initialState
    }
}

export default UploadNotesReducer