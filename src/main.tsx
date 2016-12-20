import * as React from "react";
import * as ReactDOM from "react-dom";

import styled from "styled-components";

interface HelloProps { compiler: string; framework: string; }


const Title = styled.h1`
    color: red;
`;


class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <Title>Hello from {this.props.compiler} and {this.props.framework}!</Title>;
    }
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);
