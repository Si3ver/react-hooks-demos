// HOC
import { Component, PureComponent } from 'react';

function getSize() {
  return window.innerWidth > 1000 ? 'large' : 'small';
}

/**
 * HOC: 给子组件传递窗口大小
 */
const withWindowSize = (Comp) => {
  class WrappedComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        size: getSize(),
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      console.log(this);
      this.setState({
        size: getSize(),
      });
    }

    render() {
      const { size } = this.state;
      return <Comp size={size} />;
    }
  }
  return WrappedComponent;
};

class MyComponent extends Component {
  render() {
    const { size } = this.props;
    return (
      <div>
        [HOC] Current Window Size:
        {' '}
        {size}
      </div>
    );
  }
}

// 使用 withWindowSize 产生高阶组件，用于产生 size 属性传递给真正的业务组件
export default withWindowSize(MyComponent);
