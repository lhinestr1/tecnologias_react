//sagas --> funciones generadoras
//ejecutar Whatches
import {all, fork} from 'redux-saga/effects'
import todo from './todo_saga'
 

//fork __> para lazarlos en paralela
export default function* rootSaga(){
   yield all([
      fork(todo)
   ])
}