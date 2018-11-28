import { Deserializable } from '@/utils/deserializable.utils';


export class ExampleModel implements Deserializable<ExampleModel> {

  id: number|undefined;
  name: string|undefined;

  deserialize(input: any): ExampleModel {
    Object.assign(this, input);
    return this;
  }
}
