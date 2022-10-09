import e from "express"
import React from "react"

console.log("start")
export default class TodoBox extends React.Component {
    render() {
        console.log("start rendering TodoBox")
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        )
    }
}
class TodoList extends React.Component {
    render() {
        console.log("start rendering TodoList")
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                    <tbody>
                        <Todo title="Shopping">
                            Milk
                        </Todo>
                        <Todo title="Hair cut">
                            13:00
                        </Todo>
                        <Todo title="Learn React">
                            15:00
                        </Todo>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { checked: false }
        console.log(`Constructor. State: ${this.state.checked}`)
    }
    handleChange(e) {
        console.log(e);
        console.log(`Previous state: ${this.state.checked}`)
        this.setState({checked: !this.state.checked});
        console.log(`New state: ${this.state.checked}`)
    }
    render() {
        console.log("start rendering Todo")
        return (
            <tr>
                <td style={{border:"1px solid black"}}>
                    <input
                        type="checkbox" checked={this.state.checked} onChange={this.handleChange}
                    />
                </td>
                <td style={{border:"1px solid black"}} onClick={console.log("a")}>
                    {this.props.title}
                </td>
                <td style={{border: "1px solid black"}}>
                    {this.props.children}
                </td>
            </tr>
        )
    }
}

class TodoForm extends React.Component {
    render() {
        return <div className="todoForm">I am a TodoForm.</div>
    }
}
