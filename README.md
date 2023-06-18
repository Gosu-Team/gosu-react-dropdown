# React Dropdown

**Gosu React Dropdown** is a simple React dropdown component 

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install gosu-dropdown --save
```

If you're using `yarn`, run:

```sh
yarn add gosu-dropdown
```

## Usage

To use the component, first import `Dropdown` into your file:

```jsx
import Dropdown from "gosu-dropdown";
```

```jsx
const options = [
  { key: '1', value: <div>🇺🇸 English</div>, label: <div>🇺🇸</div>  },
  { key: '2', value: <div>🇵🇱 Polski</div>, label: <div>🇵🇱</div>  },
  { key: '3', value: <div>🇺🇦 Україньскою</div>, label: <div>🇺🇦</div>  },
]

<Dropdown
  defaultSelectedKey="1"
  listPlacement="bottomRight"
  options={options} />
```

## Props

| Property             | Type           | Default        | Description                                         |
| :--------------------|:---------------|:---------------|:----------------------------------------------------|
| `options`            | `Array`        | `[]`           | {key: string, value: string, label?: string }       |
| `onChange`           | `function`     | `undefined`    |                                                     |
| `listPlacement`      | `string`       | `bottomCenter` | bottomCenter, bottomLeft, bottomRight               |
| `caretColor`         | `styles`       | `undefined`    | #000                                                |
| `placeholder`        | `styles`       | `undefined`    | 'Select option'                                     |
| `defaultSelectedKey` | `number`       | `string`       | Any key from options                                |
| `isOpen`             | `boolean`      | `undefined`    | Needs for development, if you want add custom style |
| `styleRoot`          | `styles`       | `undefined`    | Custom style for Root                               |
| `styleTrigger`       | `styles`       | `undefined`    | Custom style for Trigger                            |
| `styleOption`        | `styles`       | `undefined`    | Custom style for Option                             |
| `styleList`          | `styles`       | `undefined`    | Custom style for List                               |
