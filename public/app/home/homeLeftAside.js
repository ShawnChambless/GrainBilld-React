var React = require('react'),
    $     = require('jquery'),

    HomeLeftAside = React.createClass({
        getInitialState: function() {
            return {
                totalRecipes: 'Loading',
                totalCommunity: 'Loading'
            };
        },
        componentDidMount: function() {
            $.get('http://localhost:8080/totalRecipes', function(resp) {
                this.setState({ totalRecipes: resp.totalCount, totalCommunity: resp.totalCommunity });
            }.bind(this));
        },
        render: function() {
            return ( <div className='data'>
                        <p>Total recipes: { this.state.totalRecipes }</p>
                        <p>Total community recipes: { this.state.totalCommunity }</p>
                    </div> );
        }
    });

module.exports = HomeLeftAside;
