import React, { useState, useEffect } from 'react';


function Example() {
    // 声明一个叫 "count" 的 state 变量
    const [count, setCount] = useState(0);
    //  声明多个 state 变量
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    // 等同于 componentDidMount and componentDidUpdate 这两三个函数的组合
    // 当第一次渲染完毕后和状态更新变化时，均会调用useEffect函数。
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    });


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// *****等价的class示例******
// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }

export default Example;


