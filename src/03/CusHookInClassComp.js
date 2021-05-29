// 在class组件中使用自定义hooks: HOC
import { Component } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

// 利用HOC封装
const withWindowSize = (Comp) => (props) => {
  const windowSize = useWindowSize();
  return <Comp windowSize={windowSize} {...props} />;
};

class MyComp extends Component {
  render() {
    const { windowSize } = this.props;
    return (
      <div>
        [use Custom Hooks in Class Comp] Current Window Size:
        {' '}
        {windowSize}
      </div>
    );
  }
}

export default withWindowSize(MyComp);
