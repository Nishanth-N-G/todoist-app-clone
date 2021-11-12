import React from 'react'
import Content from './components/Content.jsx';
import Header from './components/Header.jsx';
import './App.scss';
import HeaderTwo from './components_2/HeaderTwo.js';
import ContentTwo from './components_2/ContentTwo.js';
import store from './components_2/storeRedux.js';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <div>
            {/* <Header />
            <Content /> */}
            <Provider store={store}>
                <HeaderTwo />
                <ContentTwo />
            </Provider>
        </div>
    )
}

export default App;
