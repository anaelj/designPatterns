import { MyDatabaseModule } from './db/my-database-module';

export const myDatabase = MyDatabaseModule;
myDatabase.add({ name: 'Luis', age: 30 });
myDatabase.add({ name: 'Maria', age: 50 });
myDatabase.add({ name: 'Eduardo', age: 10 });
myDatabase.remove(1);
myDatabase.show();
