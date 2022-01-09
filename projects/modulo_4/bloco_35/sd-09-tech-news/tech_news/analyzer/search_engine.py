import re
import datetime
from tech_news.database import search_news


# Requisito 6
def search_by_title(title):
    news_data = search_news({"title": re.compile(title, re.IGNORECASE)})
    news_list = []

    for news in news_data:
        news_output = (news["title"], news["url"])
        news_list.append(news_output)

    return news_list


# Requisito 7
def search_by_date(date):
    try:
        datetime.date.fromisoformat(date)
        news_data = search_news({"timestamp": re.compile(date)})
        news_list = []

        for news in news_data:
            news_output = (news["title"], news["url"])
            news_list.append(news_output)

        return news_list
    except ValueError:
        raise ValueError("Data inválida")


# Requisito 8
def search_by_source(source):
    news_data = search_news({"sources": re.compile(source, re.IGNORECASE)})
    news_list = []

    for news in news_data:
        news_output = (news["title"], news["url"])
        news_list.append(news_output)

    return news_list


# Requisito 9
def search_by_category(category):
    news_data = search_news({
        "categories": re.compile(category, re.IGNORECASE)
    })
    news_list = []

    for news in news_data:
        news_output = (news["title"], news["url"])
        news_list.append(news_output)

    return news_list
