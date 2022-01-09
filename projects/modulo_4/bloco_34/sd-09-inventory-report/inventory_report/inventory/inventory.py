from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
import csv
import json
import xml.etree.ElementTree as ET


def convert_xml_data(dataset):
    fileData = []

    for record in dataset:
        product = {}

        for element in record:
            product[element.tag] = element.text
        fileData.append(product)

    return fileData


class Inventory:
    @classmethod
    def import_data(cls, filePath, reportType):
        fileContent = cls.get_data_file(filePath)
        if reportType == "simples":
            return SimpleReport.generate(fileContent)
        elif reportType == "completo":
            return CompleteReport.generate(fileContent)

    @classmethod
    def get_data_file(cls, filePath):
        with open(filePath) as file:
            if filePath.lower().endswith(".csv"):
                fileData = csv.DictReader(file)
                return list(fileData)

            elif filePath.lower().endswith(".json"):
                fileData = json.load(file)
                return fileData

            elif filePath.lower().endswith(".xml"):
                data = ET.parse(file)
                dataset = data.getroot()
                return convert_xml_data(dataset)
