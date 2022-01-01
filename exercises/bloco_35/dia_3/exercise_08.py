import requests
import parsel

URL_BASE = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(URL_BASE)
selector = parsel.Selector(response.text)
flags_url = selector.css(".gallerybox .image img::attr(src)").getall()
for url in flags_url:
    filename = url.split("/")[-1]
    image_content = requests.get(url).content
    with open(filename, "wb") as file:
        file.write(image_content)
