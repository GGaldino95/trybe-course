from inventory_report.reports.simple_report import SimpleReport
from collections import Counter


class CompleteReport(SimpleReport):
    @classmethod
    def generate(cls, list):
        simpleReport = SimpleReport.generate(list)
        completeReport = cls.__get_complete_report(list)

        return (
            f"{simpleReport}\n"
            f"{completeReport}"
        )

    @classmethod
    def __get_complete_report(cls, inventoryList):
        output = ""
        companies = [
          company["nome_da_empresa"] for company in inventoryList
        ]
        productsCount = Counter(companies)

        for company in productsCount:
            output += f"- {company}: {productsCount[company]}\n"

        return f"Produtos estocados por empresa: \n{output}"
