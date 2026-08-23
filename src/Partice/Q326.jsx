import { Component } from "react";

class Boundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <p>Something went wrong</p>
    ) : (
      this.props.children
    );
  }
}

const Q326 = () => (
  <Boundary>
    <p>Protected content</p>
  </Boundary>
);

export default Q326;
