import React, { useState, useEffect } from 'react';

function BlogView({ id }) {
  // 设置一个本地 state 用于保存 blog 内容
  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    // useEffect 的 callback 要避免直接的 async 函数
    // 需要封装一下
    let timer;
    const doAsync = async () => {
      // 当 id 发生变化时，将当前内容清楚以保持一致性
      setBlogContent(null);
      timer = setTimeout(() => {
        console.log('1');
        setBlogContent(<div>
          Blog-
          {id}
          {' '}
          Content: balabala...
        </div>);
      }, 1000);
    };
    doAsync();
    return () => {
      console.log(2);
      clearTimeout(timer);
    };
  }, [id, setBlogContent]); // 使用 id 作为依赖项，变化时则执行副作用

  // 如果没有 blogContent 则认为是在 loading 状态
  const isLoading = !blogContent;
  return <div>{isLoading ? 'Loading...' : blogContent}</div>;
}

export default function Main() {
  return <BlogView id={100} />;
}
