import React from 'react';
import     $ from 'jquery';


const NewBatch = React.createClass({
    getInitialState() {
        return {
            ingredients: []
        };
    },
    componentDidMount() {
        $.get('http://localhost:8080/ingredients', function(resp) {
            console.log(resp);
        });
    },
    render() {
        return (
            <p>Hello</p>
        );
    }
});

module.exports = NewBatch;
