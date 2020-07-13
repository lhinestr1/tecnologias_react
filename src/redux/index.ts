import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
//reducers
import rootReducer from './reducers/index';
//sagas
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './sagas/'



const sagaMiddleware = createSagaMiddleware();

function createStore(){
    const store = configureStore({
        reducer: rootReducer,
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: false
            }),
            sagaMiddleware
        ],
        devTools:{
            features: {
                pause: true, // start/pause recording of dispatched actions
                lock: true, // lock/unlock dispatching actions and side effects
                persist: true, // persist states on page reloading
                export: true, // export history of actions in a file
                import: true, // import history of actions from a file
                jump: true, // jump back and forth (time travelling)
                skip: true, // skip (cancel) actions
                reorder: true, // drag and drop actions in the history list
                dispatch: true, // dispatch custom actions or action creators
                test: true, // generate tests for the selected actions
            }
        }
    })

    sagaMiddleware.run(rootSaga);
    return store;
}

//export const useAppDispatch = () => useDispatch<AppDispatch>()

const store = createStore();
export default store;