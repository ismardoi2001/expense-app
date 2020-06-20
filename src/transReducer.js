import { TransactionProvider } from "./transContext";

const TransactionReducer =((state,action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":{
            return [action.playload , ...state]
        }
        default:
            return state;
    }
})
export default TransactionProvider;