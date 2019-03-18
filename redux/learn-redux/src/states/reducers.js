import { combineReducers} from 'redux'

function contact(state=[],action){
  switch(action.type){
    case "ADD_CONTACT":
    //menanmbah kontak baru
    return [
      ...state,
      {
        id: action.id,
        name: action.name,
        phone: action.phone
      }
    ];
    case "REMOVE_CONTACT":
    //MENGHAPUS KONTAK
    return state.filter(contact => contact.id != action.id);
    default:
    return state;
  }
}

const Reducers = combineReducers({
  contact
  //reducer lain yang mungkin km butuhkan
})
export default Reducers