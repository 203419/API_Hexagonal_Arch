import { AddBookUseCase } from "../application/addBookUseCase";
import { GetBooksUseCase } from "../application/getBooksUseCase";
import { Request, Response } from "express";

export class BookController {
    constructor(
        private readonly addBookUseCase: AddBookUseCase ,
        private readonly getBooksUseCase: GetBooksUseCase
    ) {}

    async addBook(request: Request, response: Response) {
        const book = request.body;
        await this.addBookUseCase.execute(book);
        response.status(201).send();
    }

    async getBooks(request: Request, response: Response) {
        const books = await this.getBooksUseCase.execute();
        response.status(200).json(books);
    }
    
}