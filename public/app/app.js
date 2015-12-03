var React    = require('react'),
    reactDOM = require('react-dom'),
    $        = require('jquery'),
    HomeRightAside = require('./home/homeRightAside'),
    HomeLeftAside  = require('./home/homeLeftAside'),

    App = React.createClass({
        render: function() {
            return (
                <div>
                    <HomeLeftAside />
                    <HomeRightAside />
                </div>
            );
        }
    });

reactDOM.render(<App />, document.getElementById('app'));
