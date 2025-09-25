import React from 'react'
import TodoProvider from './TodoProvider';
import TimerProvider from './TimerProvider';

type Props = {
    children: React.ReactNode;
};

const AppContainer = (props: Props) => {
  return (
    <TodoProvider>
        <TimerProvider>{props.children}</TimerProvider>
    </TodoProvider>
  )
}

export default AppContainer