import React from 'react';
import $     from 'jquery';

let HomeAside = React.createClass({
        render() {
            return (
                <aside className='right'>
                  <header>
                    <p>Latest community recipes</p>
                  </header>
                      { this.props.recipes }
                </aside>
            );
        }
    });

module.exports = HomeAside;
