import React from 'react';
import reactDOM from 'react-dom';

let Navbar = React.createClass({
        render: function() {
            return (
                <header role="banner" className="navigation">
                    <div className="navigation-wrapper">
                        <a href="home" className="logo">
                            <span className="octicon octicon-beer"></span>
                            <span className="name">  Grain Billd</span>
                        </a>
                  <a id="js-mobile-menu" className="navigation-menu-button">Menu</a>
                    <nav role="navigation">
                      <ul id="js-navigation-menu" className="navigation-menu show">
                        <li className="nav-link"><a >Home</a></li>
                        <li className="nav-link"><a>New Batch</a></li>
                        <li className="nav-link"><a >Ingredient Info</a></li>
                        <li className="nav-link more"><a>Recipes</a>
                          <ul className="submenu">
                            <li><a >My Recipes</a></li>
                            <li><a>Community Recipes</a></li>
                          </ul>
                        </li>
                        <li className="nav-link logout"><a>Log Out</a>
                        <a>Log In</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </header>
            );
        }
    });

reactDOM.render(<Navbar />, document.getElementById('nav'));
