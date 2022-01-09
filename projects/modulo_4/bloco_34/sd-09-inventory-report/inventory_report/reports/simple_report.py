from datetime import datetime


class SimpleReport():
    @classmethod
    def generate(cls, inventoryList):
        closestExpirationDate = cls.__get_product_oldest_expdate(inventoryList)
        oldestExpirationDate = cls.__get_product_closest_expdate(inventoryList)
        companyBiggestStockQtd = cls.__get_company_stock_quant(inventoryList)

        return (
            f"Data de fabricação mais antiga: {closestExpirationDate}\n"
            f"Data de validade mais próxima: {oldestExpirationDate}\n"
            "Empresa com maior quantidade de produtos "
            f"estocados: {companyBiggestStockQtd}\n"
        )

    @classmethod
    def __get_product_oldest_expdate(cls, inventoryList):
        dates = [
          product["data_de_fabricacao"] for product in inventoryList
        ]
        dates.sort()
        return dates[0]

    @classmethod
    def __get_product_closest_expdate(cls, inventoryList):
        currDate = datetime.now().strftime("%Y-%m-%d")
        dates = [
            product["data_de_validade"] for product in inventoryList
            if product["data_de_validade"] >= currDate
        ]
        dates.sort()
        return dates[0]

    @classmethod
    def __get_company_stock_quant(cls, inventoryList):
        companies = [
          company["nome_da_empresa"] for company in inventoryList
        ]
        return max(set(companies), key=companies.count)
