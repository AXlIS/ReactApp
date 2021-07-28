import * as React from "react";

class MyComponent extends React.Component<{ prop1: number }, {state1: string}>{ // <props, state>
    render() {
        return (
            <div>
                {this.props.prop1}x
            </div>
        )
    }
}