from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
from inventory_report.inventory.inventory_iterator import InventoryIterator
from collections.abc import Iterable


class InventoryRefactor(Iterable):
    def __init__(self, importer):
        self.importer = importer
        self.data = []

    def __iter__(self):
        return InventoryIterator(self.data)

    def import_data(self, filePath, reportType):
        self.data += self.importer.import_data(filePath)
        if reportType == "simples":
            return SimpleReport.generate(self.data)
        elif reportType == "completo":
            return CompleteReport.generate(self.data)
