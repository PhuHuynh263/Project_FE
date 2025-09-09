import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createStore } from "redux";
import allReducers from './reducers/index.js';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
