import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, deleteItem } from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton btnStyle='warning' icon='undo' hide={!todo.done} onClick={() => props.markAsPending(todo)} />
                    <IconButton btnStyle='success' icon='check' hide={todo.done} onClick={() => props.markAsDone(todo)} />
                    <IconButton btnStyle='danger' icon='trash-o' hide={!todo.done} onClick={() => props.deleteItem(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableAction'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone,markAsPending,deleteItem }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)