import React, { Component } from "react";
import shortid from "shortid";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: []
    };
  }

  addComponent = async type => {
    import(`./components/${type}.js`)
      .then(component =>
        this.setState({
          components: this.state.components.concat(component.default)
        })
      )
      .catch(error => {
        console.error(`No module to import for type, "${type}"`);
      });
  };

  async componentDidMount() {
    const { componentTypes } = this.props;
    componentTypes.map(async type => await this.addComponent(type));
  }

  render() {
    const { components } = this.state;
    if (components.length === 0) return <div>Loading...</div>;

    const componentsElements = components.map(Component => (
      <Component key={shortid.generate()} />
    ));

    return <div className="App">{componentsElements}</div>;
  }
}

export default App;
