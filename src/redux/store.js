import {createStore, applyMiddleware, combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import user from './modules/loginModule';
import pin from './modules/postModule';
import recent from './modules/recentModule';
import profile from './modules/profileModule';


const reducers = combineReducers({
	user,
	pin,
	recent,
	profile
})

export default function configureStore(initialState){
	return createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension? window.devToolsExtension():f=>f
		)
	)
	
}

