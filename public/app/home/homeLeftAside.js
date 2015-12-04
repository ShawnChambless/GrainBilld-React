import React from 'react';
import $     from 'jquery';

let HomeLeftAside = React.createClass({
        render() {
            return (
                <div className='data'>
                        <p>{ this.props.totalRecipes } total recipes!</p>
                        <p>{ this.props.totalCommunity } total community recipes!</p>
                </div>
            );
        }
    });

module.exports = HomeLeftAside;
