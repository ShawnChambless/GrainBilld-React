import React    from 'react';
import reactDOM from 'react-dom';
import Home     from './home/home';
import $        from 'jquery';

let App = React.createClass({
        render: function() {
            return (
                <Home />
            );
        }
    });

reactDOM.render(<App />, document.getElementById('app'));
