import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabase as myDatabaseFromModuleA } from './module_a';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Rroberto', age: 30 });
myDatabase.add({ name: 'Joana', age: 50 });
myDatabase.add({ name: 'Luíza', age: 10 });
myDatabase.remove(1);
myDatabase.show();

console.log('😎', myDatabase === myDatabaseFromModuleA);
