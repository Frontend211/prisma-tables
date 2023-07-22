import { inspect } from 'node:util';

export default function (obj) {
  console.log(inspect(obj, {
    colors: true,
    showHidden: false,
    depth: Infinity,
    compact: true
  }));
}