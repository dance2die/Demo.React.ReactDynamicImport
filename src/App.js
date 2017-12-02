import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: []
    };
  }

  addComponent = async type => {
    import(`./components/${type}.js`).then(component =>
      this.setState({
        components: this.state.components.concat({
          type,
          component: component.default
        })
      })
    );
  };

  async componentDidMount() {
    const { componentTypes } = this.props;
    componentTypes.map(async type => await this.addComponent(type));
  }

  render() {
    const { components } = this.state;
    if (components.length === 0) return <div>Loading...</div>;

    const componentsElements = components.map(Component => (
      <Component.component key={Component.type} />
    ));

    return <div className="App">{componentsElements}</div>;
  }
}

export default App;
