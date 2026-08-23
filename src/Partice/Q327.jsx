import { Component } from "react";

class Boundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <p>Fallback UI</p>;
    return this.props.children;
  }
}

const Q327 = () => (
  <Boundary>
    <p>Safe content</p>
  </Boundary>
);

export default Q327;
