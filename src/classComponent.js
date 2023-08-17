import React from "react";

class ComponentRuby extends React.Component{
    

    state = {b:2};
    render(){
        return <div>Un componente para la info de ruby a:{this.props.a} b:{this.state.b}</div>
    }
}

export default ComponentRuby;