[![codebeat badge](https://codebeat.co/badges/e8d05682-ba2a-41b2-b4e4-e0ffcca78444)](https://codebeat.co/projects/github-com-tungv-rippl-master)
![npm](https://img.shields.io/npm/dt/rippl.svg) 
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/rippl.svg)](https://bundlephobia.com/result?p=rippl)
![zero dependencies](https://img.shields.io/badge/dependencies-0-green.svg)


# Ripple effect for React

This works with any type of element, from `<div />`, `<button />` to `<tr />` or `<td />`. Server-side rendering works fine too.

Demo: https://codesandbox.io/s/k5vo27469r

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
