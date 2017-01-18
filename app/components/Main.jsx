var React = require('react');

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    Main.jsx Rendered
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
