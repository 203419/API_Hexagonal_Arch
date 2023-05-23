import { Book } from "../domain/bookModel";
import { BookRepository } from "../domain/bookRepository";
import pgPromise from "pg-promise";

const pgp = pgPromise();

const db = pgp('postgresql://postgres:@localhost:5432/apiBooks');

export class bookRepositoryImp implements BookRepository {
    async save(book: Book): Promise<void> {
        await db.none('INSERT INTO books(title, author, price) VALUES($1, $2, $3)', [ book.title, book.author, book.price]);
    }

    async findAll(): Promise<Book[]> {
        return await db.any('SELECT * FROM books');
    }
}
