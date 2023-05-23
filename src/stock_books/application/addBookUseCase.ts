import { Book } from "../domain/bookModel";
import { BookRepository } from "../domain/bookRepository";

export class AddBookUseCase {
    constructor(private readonly bookRepository: BookRepository) {}

    async execute(book: Book): Promise<void> {
        await this.bookRepository.save(book);
    }
}