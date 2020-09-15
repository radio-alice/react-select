import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Select from './lib/App'
import { OptionInterface } from './lib'

const Basic = () => {
  let [selected, setSelected] = useState('')
  return (
    <div style={{ maxWidth: '60ch', margin: '2rem auto' }}>
      <p>{selected}</p>
      <Select
        options={['hey', 'hi', 'wtf is a monad', 'use rust']}
        onSelect={(selection) => setSelected(selection as string)}
      />
    </div>
  )
}

const OptsAsObjects = () => {
  let opts: OptionInterface[] = [
    {
      label: 'hey',
      value: 'hey',
    },
    {
      label: 'hi',
      value: 'hi',
    },
    {
      label: 'wtf is a monad',
      value: 'monad',
    },
    {
      label: 'use rust',
      value: 'rust',
    },
  ]
  let [selected, setSelected] = useState(opts[0])
  return (
    <div style={{ maxWidth: '60ch', margin: '2rem auto' }}>
      <p>{selected.label}</p>
      <Select
        options={opts}
        onSelect={(selection) => setSelected(selection as OptionInterface)}
      />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Basic />
    <OptsAsObjects />
  </React.StrictMode>,
  document.getElementById('root')
)
