import { AddBookUseCase } from "../application/addBookUseCase";
import { GetBooksUseCase } from "../application/getBooksUseCase";
import { bookRepositoryImp } from "./bookRepositoryImp";

const bookRepository = new bookRepositoryImp();
const addBookUseCase = new AddBookUseCase(bookRepository);
const getBooksUseCase = new GetBooksUseCase(bookRepository);
