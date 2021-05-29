import React, { useState, useEffect } from "react";

// 理解UseEffect依赖数组
function TestDeps() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // 1. 不提供依赖数组 -> 每次render都会触发
  useEffect(() => {
    console.log('[effect1] execute');
    return () => {
      console.log('[effect1] destroy');
    }
  })

  // 2.依赖数组为空 -> 仅仅首次render后触发
  useEffect(() => {
    console.log('[effect2] execute');
    return () => {
      console.log('[effect2] destroy');
    }
  }, [])

  // 3.提供依赖数组
  useEffect(() => {
    console.log('[effect3] execute');
    return () => {
      console.log('[effect3] destroy');
    }
  }, [count1])

  return (
    <>
      <h2>测试useEffect依赖数组</h2>
      <button onClick={() => {
        setCount1(prevCount => prevCount + 1)
      }}>
        Count1: {count1}
      </button>
      <br />
      <button onClick={() => {
        setCount2(prevCount => prevCount + 1)
      }}>
        Count2: {count2}
      </button>
      <br />
    </>
  )
}

// 依赖基本类型
function Sample1() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count changed!')
  }, [count])

  return (
    <>
      <h2>依赖基本类型</h2>
      <button onClick={() => { setCount(prev => prev + 1) }}>change count: {count}</button>
    </>
  )
}

// 依赖引用类型
function Sample2() {
  const [todos, setTodos] = useState([{ text: 'learn hooks!' }])

  useEffect(() => {
    console.log('Todos changed.');
  }, [todos]);

  const changeTodo = () => {
    setTodos(prev => {
      // prev.push({text: 'new items!'});     // 操作原对象，无法触发 useEffect
      prev = [...prev, { text: 'new item!' }]   // 构造新对象，可以触发 useEffect
      return prev
    })
    console.log(todos)
  }

  return (
    <>
      <h2>依赖引用类型</h2>
      <button onClick={changeTodo}>Add one item</button>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.text}</li>
        })}
      </ul>
    </>
  )
}

export default function Main() {
  return (
    <>
      <TestDeps />
      <Sample1 />
      <Sample2 />
    </>
  )
}
