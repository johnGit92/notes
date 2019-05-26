import { Author } from './author';

export class Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  // authorId: number;
  author: Author;

  constructor() { }

  // get id(): number {
  //   return this._id;
  // }
  // set id(id: number) {
  //   this._id = id;
  // }

  // get title(): string {
  //   return this._title;
  // }
  // set title(title: string) {
  //   this._title = title;
  // }

  // get content(): string {
  //   return this._content;
  // }
  // set content(content: string) {
  //   this._content = content;
  // }

  // get createdAt(): Date {
  //   return this._createdAt;
  // }
  // set createdAt(createdAt: Date) {
  //   this._createdAt = createdAt;
  // }

  // get updatedAt(): Date {
  //   return this._updatedAt;
  // }
  // set updatedAt(updatedAt: Date) {
  //   this._updatedAt = updatedAt;
  // }

  // get authorId(): number {
  //   return this._authorId;
  // }
  // set authorId(authorId: number) {
  //   this._authorId = authorId;
  // }

  // get author(): Author {
  //   return this._author;
  // }
  // set author(author: Author) {
  //   this._author = author;
  // }
}
