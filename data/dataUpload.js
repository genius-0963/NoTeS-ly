//Extra page

import { useDispatch, useSelector } from 'react-redux';
import { passAllNotes } from '../Redux/Actions/AllNotesAction';

let data = []

function DataUpload() {

  const dispatch = useDispatch()
  {() => {dispatch(passAllNotes(dataArray.AllNotesReducer))}}
}

export default DataUpload
