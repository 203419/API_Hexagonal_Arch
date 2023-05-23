import { Book } from "./bookModel";

export interface BookRepository {
    findAll(): Promise<Book[]>;
    // findById(id: number): Promise<Book | null>;
    save(book: Book): Promise<void>;
    // deleteById(id: number): Promise<void>;
}