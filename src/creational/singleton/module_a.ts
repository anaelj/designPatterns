import { MyDatabaseClassic } from './db/my-database-classic';

export const myDatabase = MyDatabaseClassic.instance;
myDatabase.add({ name: 'Luis', age: 30 });
myDatabase.add({ name: 'Maria', age: 50 });
myDatabase.add({ name: 'Eduardo', age: 10 });
myDatabase.remove(1);
myDatabase.show();
