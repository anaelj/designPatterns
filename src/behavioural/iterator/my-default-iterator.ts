import { MyIteratorProtocol } from './my-iterator-protocol';
import { MyDataStructure } from './my-data-structure';
export class MyDefaultIterator implements MyIteratorProtocol<string> {
  private index = 0;

  constructor(private readonly dataStructure: MyDataStructure) {}

  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index >= this.dataStructure.size();
    this.index++;
    return returnValue;
  }

  reset(): void {
    this.index = 0;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
