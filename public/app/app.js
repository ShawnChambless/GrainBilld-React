import React    from 'react';
import reactDOM from 'react-dom';
import Home     from './home/home';
import $        from 'jquery';
import NewBatch from './new-batch/newBatch';
import { createHistory } from 'history';
import { Router, History, Route, Link } from 'react-router';

const App = React.createClass({
    render: function() {
        return (
            <Router history={ history }>
                <Route path='/' component={ Home }></Route>
                <Route path='/New_Batch' component={ NewBatch }></Route>
            </Router>

        );
    }
    });

reactDOM.render(<App />, document.getElementById('app'));
