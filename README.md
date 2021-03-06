## React-Select

This component is a simple replacement for the native HTML `<select>` element.

It takes a list of options via the `options` prop and an `onSelect` function that runs when an option is selected.

The list of options can either be an array of strings:

```tsx
<Select
  options={['hey', 'hi', 'what actually is a monad', 'use rust']}
  onSelect={(selection) => setSelected(selection as string)}
/>
```

or an array of objects with the keys `value` and `label`:

```tsx
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
      label: 'what actually is a monad',
      value: 'monad',
    },
    {
      label: 'use rust',
      value: 'rust',
    },
  ]
<Select
  options={opts}
  onSelect={(selection) => setSelected(selection as OptionInterface)}
/>
```

More fleshed out examples can be found in [src/index.tsx](src/index.tsx)

To play with the demo:

```bash
git clone https://github.com/radio-alice/react-select
cd react-select
yarn && yarn start
```

I'm not going to publish this as an npm/yarn module, but that would obviously the best way to distribute this as a library.

To use in your own projects (without npm/yarn):

```bash
cd <your project folder>/src
git clone https://github.com/radio-alice/react-select
```
and then import the component with:
```ts
import Select from ./react-select
```

and the `OptionInterface` type (a type for the option objects) with:
```ts
import type { OptionInterface } from ./react-select
```
