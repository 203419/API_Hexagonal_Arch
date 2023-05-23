import { Book } from "../domain/bookModel";
import { BookRepository } from "../domain/bookRepository";

export class GetBooksUseCase {
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(): Promise<Book[]> {
        return await this.bookRepository.findAll();
    }
}