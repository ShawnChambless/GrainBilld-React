import React      from 'react';
import LeftAside  from './homeLeftAside';
import RightAside from './homeRightAside';
import $          from 'jquery';

let Home = React.createClass({
    getInitialState() {
        return {
            recipes: [],
            totalRecipes: 'Loading',
            totalCommunity: 'Loading'
        };
    },
    componentDidMount() {
        $.get('http://localhost:8080/recipes', function(resp) {
            if (this.isMounted()) {
                this.setState({ recipes: this.state.recipes.concat(resp) });
            }
        }.bind(this));
        $.get('http://localhost:8080/totalRecipes', function(resp) {
            if (this.isMounted()) {
                this.setState({ totalRecipes: resp.totalCount, totalCommunity: resp.totalCommunity });
            }
        }.bind(this));
    },
    render() {
        let recipeArray = 'Loading latest recipes';
        recipeArray = this.state.recipes.map(function(item, index) {
            return ( <p key={ index }> { item.name } </p> );
        }.bind(this));
        return (
            <div className='container'>
                <h1>Welcome to Grain Billd 2!</h1>
                <LeftAside totalRecipes={ this.state.totalRecipes } totalCommunity={ this.state.totalCommunity }  />
                <RightAside recipes={ recipeArray } />
            </div>
        );
    }
    });
module.exports = Home;
