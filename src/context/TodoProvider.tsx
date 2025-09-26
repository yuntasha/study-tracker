import React from 'react'

type Props = {
    children: React.ReactNode;
};

const TodoProvider = (props: Props) => {
  return (
    <div>{props.children}</div>
  )
}

export default TodoProvider