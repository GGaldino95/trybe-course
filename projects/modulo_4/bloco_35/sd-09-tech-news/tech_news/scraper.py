from parsel import Selector
from .database import create_news
import requests
import time


# Requisito 1
def fetch(url):
    try:
        response = requests.get(url)
        time.sleep(1)
        return response.text if response.status_code == 200 else None
    except requests.ReadTimeout:
        return None


# Requisito 2
def scrape_noticia(html_content):
    selector = Selector(text=html_content)
    url = selector.css("head link[rel=canonical]::attr(href)").get()
    title = selector.css("h1#js-article-title::text").get()
    timestamp = selector.css("#js-article-date::attr(datetime)").get()
    writer = selector.css(".z--font-bold::text").get()
    shares_count = selector.css(".tec--toolbar__item::text").get()
    comments_count = selector.css(".tec--btn::attr(data-count)").get()
    summary = selector.css(
        ".tec--article__body > p:nth-child(1) ::text"
    ).getall()
    sources = selector.css(".z--mb-16 .tec--badge::text").getall()
    categories = selector.css("#js-categories .tec--badge::text").getall()

    if not writer:
        writer = selector.css(".z--font-bold a::text").get()

    if not shares_count:
        shares_count = 0
    else:
        shares_count = str(shares_count).split()[0]

    sources = [str(source).strip() for source in sources]
    categories = [str(category).strip() for category in categories]

    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": str(writer).strip(),
        "shares_count": int(shares_count),
        "comments_count": int(comments_count),
        "summary": "".join(summary),
        "sources": sources,
        "categories": categories,
    }


# Requisito 3
def scrape_novidades(html_content):
    return Selector(html_content).css(
        ".tec--list--lg h3.tec--card__title a::attr(href)"
    ).getall()


# Requisito 4
def scrape_next_page_link(html_content):
    return Selector(html_content).css(
        ".tec--btn--lg ::attr(href)"
    ).get()


# Requisito 5
def get_tech_news(amount):
    BASE_URL = "https://www.tecmundo.com.br/novidades"
    news_list = []

    while len(news_list) < amount:
        raw_html = fetch(BASE_URL)
        news_url_list = scrape_novidades(raw_html)

        for news_url in news_url_list:
            news_raw_html = fetch(news_url)
            news_data = scrape_noticia(news_raw_html)
            if len(news_list) < amount:
                news_list.append(news_data)
        BASE_URL = scrape_next_page_link(raw_html)

    create_news(news_list)
    return news_list
