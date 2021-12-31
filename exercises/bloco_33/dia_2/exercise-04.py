import json
import csv


def retrieve_books(file):
    return [json.loads(line) for line in file]


def count_books_by_categories(books):
    categories = {}

    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0

            categories[category] += 1

    return categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


# Execução do programa:
if __name__ == "__main__":
    # Resgatar livros do arquivo
    with open("books.json") as file:
        books = retrieve_books(file)

    # Contagem de livros por categoria
    book_count_by_category = count_books_by_categories(books)

    # Calcular porcentagem
    number_of_books = len(books)
    books_percentage_rows = calculate_porcentage_by_category(
        book_count_by_category, number_of_books
    )

    # Escrita do arquivo CSV
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
