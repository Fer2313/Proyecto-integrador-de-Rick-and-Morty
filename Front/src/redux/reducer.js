import { ADD_PJ,DELETE_PJ,FILTER,ORDER, RESET } from "./action_type";

const initialState={
    myFavorites:[],
    myFavoritesCopy:[]
  }
    
    
    export default function rootReducer(state=initialState,{type,payload}) {
      switch (type) {
        case ADD_PJ:
            return{
                ...state,
                myFavorites:[...state.myFavorites,payload],
                myFavoritesCopy:[...state.myFavorites,payload]
            }
            case DELETE_PJ:
                const filtered=state.myFavorites.filter((ch)=>{return ch.id!==payload})
            return{
             ...state,
             myFavorites: filtered,
             myFavoritesCopy: filtered
            }
            case FILTER:
              const filterCopy=[...state.myFavoritesCopy]
              const filter=filterCopy.filter((ch)=>{return ch.gender===payload})
              return{
                ...state,
                myFavorites:filter,
               
               }
                case ORDER:
                  const orderCopy=[...state.myFavoritesCopy]
                  const order= orderCopy.sort((a,b)=>{
                    if (a.id>b.id) {
                      return "Ascendente"===payload?1:-1
                    }
                   if (a.id<b.id) {
                      return "Descendente"===payload?1:-1
                    }
                    return 0
                  })
                  return{
                    ...state,
                    myFavorites:order,
                  }
                  case RESET:
            return{
                ...state,
                myFavorites:[...state.myFavoritesCopy]
               
            }
            default:
            return state;
      }
    }
    
