import React from 'react';

export default function TodoForm(props){

    return(
        <form>
            <input
                type='text'
                name ='todo'
                placeholder='...todo'
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}