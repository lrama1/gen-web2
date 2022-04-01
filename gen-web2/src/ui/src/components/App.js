import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import PersonListContainer from '../containers/PersonListContainer';
import PersonEditContainer from '../containers/PersonEditContainer';
import Home from './Home';
import ItemTypeListContainer from '../containers/ItemTypeListContainer';
import ItemTypeEditContainer from '../containers/ItemTypeEditContainer';


function App(props) {

    return (
        <HashRouter>
            <div className="p-grid">
                <div className="p-col-3">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <Link to="/">Home</Link> <span className="sr-only">(current)</span>
                        </li>
                        <li>
                            <Link to="/persons" onClick={() => props.fetchAllPersons()}>Persons</Link>
                        </li>
                        <li><Link className="nav-link" to="/itemtypes"
                                  onClick={() => props.fetchAllItemTypes()}>ItemTypez</Link>
                        </li>
                    </ul>
                </div>

                <div className="p-col-9">
                    <Route path="/" exact component={Home}/>
                    <Route path="/persons" exact component={PersonListContainer}/>
                    <Route path="/person" exact component={PersonEditContainer}/>
                    <Route path="/itemtypes" exact component={ItemTypeListContainer}/>
                    <Route path="/itemtype" exact component={ItemTypeEditContainer}/>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
