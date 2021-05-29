// 在class组件中使用自定义hooks: HOC

import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize'

// 利用HOC封装
const withWindowSize = (Comp) => {
  return props => {
    const windowSize = useWindowSize();
    return <Comp windowSize={windowSize} {...props} />
  }
}

class MyComp extends React.Component {
  render() {
    const {windowSize} = this.props
    return (<div>Current Window Size: {windowSize}</div>)
  }
}

export default withWindowSize(MyComp)
