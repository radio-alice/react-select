import React, { useState } from 'react'
import { OptionInterface, isOption } from '.'
import './index.css'

interface Props {
  options: string[] | OptionInterface[]
  onSelect: (selection: string | OptionInterface) => void
}

const Select = ({ options, onSelect }: Props) => {
  const optsAreObjs = isOption(options[0])
  const uniformOptions: OptionInterface[] = optsAreObjs
    ? (options as OptionInterface[])
    : (options as string[]).map((e) => ({ value: e, label: e }))

  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState(uniformOptions[0])

  return (
    <div className='select'>
      <div className='head' onClick={(_) => setOpen(!open)}>
        <div className='selection'>{selection.label}</div>
        <button>{open ? '▼' : '▶︎'}</button>
      </div>
      {open ? (
        <div className='menu'>
          {uniformOptions.map((opt: OptionInterface) => (
            <option
              key={opt.value}
              value={opt.value}
              onClick={(_) => {
                setOpen(false)
                setSelection(opt)
                onSelect(optsAreObjs ? opt : opt.value)
              }}
              className={opt.value === selection.value ? 'selected' : ''}
            >
              {opt.label}
            </option>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Select
