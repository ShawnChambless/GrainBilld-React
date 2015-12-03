var React = require('react'),
    $     = require('jquery'),

    HomeAside = React.createClass({
        getInitialState: function() {
            return {
                recipes: []
            };
        },
        componentDidMount: function() {
            $.get('http://localhost:8080/recipes', function(resp) {
                this.setState({ recipes: this.state.recipes.concat(resp) });
            }.bind(this));
        },
        render: function() {
            var recipeArray = 'Loading latest recipes';
            recipeArray = this.state.recipes.map(function(item, index) {
                return ( <p key={ index }> { item.name } </p> );
            }.bind(this));
            return (
                <div className="container">
                    <aside className='right'>
                      <header>
                        <p>Latest community recipes</p>
                      </header>
                          { recipeArray }
                    </aside>
                </div>
            );
        }
    });

module.exports = HomeAside;
