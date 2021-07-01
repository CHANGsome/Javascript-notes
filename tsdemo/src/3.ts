// interface computer {
//   (a: number, b: number): number;
// }
// const Add: computer = (a: number, b: number) => a + b;
// console.log(Add(1, 2));
// interface Animal {
//   move: () => void;
// }
// interface Human extends Animal {
//   name: string;
// }
// const human: Human = {
//   name: 'hhh',
//   move: () => {
//     console.log('name');
//   },
// };
// human.move();
// class Animal {
//   move() {
//     console.log('move');
//   }
// }
// class Human extends Animal {
//   say() {
//     console.log('say');
//   }
// }
// const human = new Human();
// human.move();
// console.log(human);

// interface Human {
//   name: string;
//   age: number;
// }
// let y = { name: 'a', age: 14, like: 'game' };
// let x: Human = y; // 只要y具有x中的属性，就可以兼容
// let z: Human = { name: 'a', age: 14, like: 'game' };

// function pluck<T, K extends keyof T>(o: T, keys: Array<K>): Array<T[K]> {
//   return keys.map((k) => o[k]);
// }
// pluck({ name: 'a', age: 14, like: 'game' }, ['name']);
// interface Person {
//   name: string;
//   age: number;
// }
// type ReadOnlyPerson = Readonly<Person>;
// interface Person2 {
//   name?: string;
//   age?: number;
// }
// type Person3 = Partial<Person>;
// type Person4 = Required<Person3>;
type Props =
  | {
      action: 'creact';
      name: string;
    }
  | {
      action: 'update';
      name: string;
      id: number;
    };
function fn(a: Props) {
  if (a.action === 'update') {
    console.log(a.id);
  }
}
