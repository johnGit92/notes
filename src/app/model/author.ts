export class Author {
  private _id: number;
  private _name: string;
  private _age: number;

  constructor() { }

  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get age(): number {
    return this._age;
  }
  set age(age: number) {
    this._age = age;
  }


}
