# Ripple effect for React

This works with any type of element, from `<div />`, `<button />` to `<tr />` or `<td />`. Server-side
rendering works fine too.

## 1. Installation

```
npm i rippl

# or

yarn add rippl
```

## 2. Usage

### Example 1: wrap a button

```js
import Ripple from 'rippl'

<Ripple>
  <button>click me</button>
</Ripple>
```

### Example 2: wrap a table row

```js
import Ripple from 'rippl'

<table>
  <tbody>
    {rows.map(row => (
      <Ripple key={row.id}>
        <tr>
          <td>{row.firstName}</td>
          <td>{row.lastName}</td>
        </tr>
      </Ripple>
    ))}
  </tbody>
</table>
```

## Props

| prop       | type                                   | descriptions                                                               |
| ---------- | -------------------------------------- | -------------------------------------------------------------------------- |
| `children` | React Element, only one child accepted | the target element                                                         |
| `disabled` | Boolean? (default `undefined`)         | when set to true, no ripple effect applied                                 |
| `onClick`  | Function? (default `undefined`)        | when onClick is a function, it's called at the moment ripple effect starts |
| `rounded`  | Boolean? (default `undefined`)         | when set to true, ripple effect is "captured" within a circular area       |

## Road map

- [ ] add duration props
- [ ] add color prop
