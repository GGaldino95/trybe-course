from collections import Counter
import csv


def filter_orders(orders, customer):
    customer_orders = []
    for order in orders:
        if order[0] == customer:
            customer_orders.append(order)

    return customer_orders


def find_most_ordered(orders, customer):
    customer_orders = filter_orders(orders, customer)

    orders_amount = (
        dict(Counter(order[1] for order in customer_orders))  # *
    )  # /\ {'hamburguer': 16, 'pizza': 8, 'coxinha': 8}

    amount = list(orders_amount.values())  # [16, 8, 8]

    most_ordered = (
        list(orders_amount.keys())[amount.index(max(amount))]  # **
    )  # /\ "hamburguer"

    return str(most_ordered)


def find_amount_ordered(orders, customer, plate):
    customer_orders = filter_orders(orders, customer)
    order_count = 0
    for order in customer_orders:
        if order[1] == plate:
            order_count += 1

    return str(order_count)


def find_never_ordered(orders, customer):
    all_orders = set()
    customer_orders = set()

    for order in orders:
        all_orders.add(order[1])
        if order[0] == customer:
            customer_orders.add(order[1])

    return all_orders.difference(customer_orders)


def find_days_never_went(orders, customer):
    all_days = set()
    customer_days = set()

    for order in orders:
        all_days.add(order[2])
        if order[0] == customer:
            customer_days.add(order[2])

    return all_days.difference(customer_days)


def analyze_log(path_to_file):
    try:
        if not str(path_to_file).lower().endswith(".csv"):
            raise FileNotFoundError

        orders = []
        with open(path_to_file, "r") as raw_data:
            orders_data = csv.reader(raw_data)
            for order in orders_data:
                orders.append(order)

        most_ordered = find_most_ordered(orders, "maria")
        amount_ordered = find_amount_ordered(orders, "arnaldo", "hamburguer")
        never_ordered = find_never_ordered(orders, "joao")
        days_never_went = find_days_never_went(orders, "joao")

        with open('data/mkt_campaign.txt', 'w') as raw_data:
            raw_data.writelines(
                f"{most_ordered}\n"
                f"{amount_ordered}\n"
                f"{never_ordered}\n"
                f"{days_never_went}\n"
            )
    except FileNotFoundError:
        raise FileNotFoundError(f"No such file or directory: '{path_to_file}'")


"""
*:  [Linha 12] Referencia:
    https://www.geeksforgeeks.org/python-find-most-frequent-element-in-a-list/

**: [Linha 15] Referencia:
    https://stackoverflow.com/questions/8023306/get-key-by-value-in-dictionary
"""
