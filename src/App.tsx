import './App.css'

import React from 'react'

import Message from '@/atoms/Message'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, App.</h1>
      <Message text="メッセージをprops で渡す？" no={10} />
    </div>
  )
}

export default App
