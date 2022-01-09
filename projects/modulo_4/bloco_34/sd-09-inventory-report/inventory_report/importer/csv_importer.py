from inventory_report.importer.importer import Importer
from inventory_report.inventory.inventory import Inventory


class CsvImporter(Importer):
    @classmethod
    def import_data(cls, filePath):
        try:
            isTypeValid = filePath.lower().endswith(".csv")
            if not isTypeValid:
                raise NotImplementedError
            return Inventory.get_data_file(filePath)
        except NotImplementedError:
            raise ValueError("Arquivo inválido")
