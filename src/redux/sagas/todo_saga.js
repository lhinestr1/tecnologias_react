//put es el dispacth
//call llamada  a la api que  devuelve promesa
//takeLatest: whatcher -> funcion generadoq ue este escuchado cuando se disparan las actions
import { takeLatest } from 'redux-saga/effects'
//actions
import todoReducer from '../reducers/todoReducer'


function* addTodo(){
   try {
      yield console.log("llegó al saga de addTodo");    
   } catch (err) {
      
   }
}

function* deleteTodo(){
   try {
      yield console.log("llegó al saga de deleteTodo");    
   } catch (err) {
      
   }
}

//Watchers --> vigilando las acciones
export default function* todos(){

   //yield es una funcion generadora
   //( accion a capturar, funcion a ejecutar )
   yield takeLatest(todoReducer.actions.addTodo,addTodo);
   yield takeLatest(todoReducer.actions.deleteTodo,deleteTodo);

   //yield throttle(5000,  typeActions.START_GET_POKEMONS,getPokemons);

   /*
   takeLatest -> si mandan varias al tiempo, ejecutar o pasa al reducer, la ultima
   takeEvery -> si mandan varias al tiempo, ejecuta todas
   throttle --> si mandan varias al tiempo, ejecuta todas, acepta daca cierto tiempo pasado como parametro
   take --> no pasa al sgte hasta terminarlo
   NOTA: ninguna cancela peticiones al servidor
   */

}