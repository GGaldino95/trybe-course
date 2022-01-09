from collections import Counter
from src.analyze_log import (
    find_most_ordered,
    find_never_ordered,
    find_days_never_went
)


class TrackOrders:
    def __init__(self):
        self.orders = []

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, costumer, order, day):
        output = [costumer, order, day]
        self.orders.append(output)

    def get_most_ordered_dish_per_costumer(self, costumer):
        return find_most_ordered(self.orders, costumer)

    def get_never_ordered_per_costumer(self, costumer):
        return find_never_ordered(self.orders, costumer)

    def get_days_never_visited_per_costumer(self, costumer):
        return find_days_never_went(self.orders, costumer)

    def get_busiest_day(self):
        days_amount = dict(Counter(order[2] for order in self.orders))
        amount = list(days_amount.values())
        most_ordered_day = list(days_amount.keys())[amount.index(max(amount))]
        return str(most_ordered_day)

    def get_least_busy_day(self):
        days_amount = dict(Counter(order[2] for order in self.orders))
        amount = list(days_amount.values())
        least_ordered_day = list(days_amount.keys())[amount.index(min(amount))]
        return str(least_ordered_day)
