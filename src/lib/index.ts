export interface OptionInterface {
  value: string
  label: string
}

export const isOption = (option: string | OptionInterface) =>
  (option as OptionInterface).label !== undefined &&
  (option as OptionInterface).value !== undefined
