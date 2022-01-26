import { MyDatabaseModule } from './db/my-database-module';
import { myDatabase as myDatabaseFromModuleA } from './module_a';

const myDatabase = MyDatabaseModule;
myDatabase.add({ name: 'Rroberto', age: 30 });
myDatabase.add({ name: 'Joana', age: 50 });
myDatabase.add({ name: 'Luíza', age: 10 });
myDatabase.remove(1);
myDatabase.show();

console.log('😎', myDatabase === myDatabaseFromModuleA);
