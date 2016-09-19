import React from 'react';

import $ from 'jquery';

const Inner = React.createClass({
    render() {
        var flattenField = function (item) {
            let x = item.protected ? "#" : (item.public ? "+" : "-");
            return (
                <div key={item.key} className="uml-item">
                    <span className="text-muted">{x}&nbsp;</span>
                    <span className="code-pink">{item.type}&nbsp;</span>
                    <span className="code-lightblue">{item.name}&nbsp;</span>
                </div>
            )
        };

        var flattenMethod = function (item) {
            var i = 0;
            var flatten = function (item) {
                return (
                    <span key={i++} className="code-orange">{item}&nbsp;</span>
                )
            };
            if (!item.args) item.args = [];
            let x = item.protected ? "#" : (item.public ? "+" : "-");
            return (
                <div key={item.key} className="uml-item">
                    <span className="text-muted">{x}&nbsp;</span>
                    <span className="code-pink">{item.type}&nbsp;</span>
                    <span className="code-lightblue">{item.name}&nbsp;</span>
                    <span className="color-gray">(&nbsp;</span>
                    {item.args.map(flatten)}
                    <span className="color-gray">)</span>
                </div>
            )
        };
        return (
            <div className="col-xs-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h4 className="uml-title">{this.props.parent}</h4>
                        <div className="uml-divider"></div>
                        {this.props.fields.map(flattenField)}
                        <div className="uml-divider"></div>
                        {this.props.methods.map(flattenMethod)}
                    </div>
                </div>
            </div>
        )
    }
});

const UML = React.createClass({
    getInitialState: function() {
        return {
            descriptions: []
        };
    },
    componentDidMount: function() {
        this.serverRequest = $.get("/assets/problem2.json", function (result) {
            this.setState({
                descriptions: result.descriptions
            });
        }.bind(this));
    },
    render() {
        var flatten = function(item) {
            return (
                <Inner key={item.parent} parent={item.parent} fields={item.fields} methods={item.methods} />
            )
        };
        return (
            <div className="row ">
                {this.state.descriptions.map(flatten)}
            </div>
        )
    }
});

export default UML;