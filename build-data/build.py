import json
from os import makedirs

import qrcode
import yaml


def load_yaml(filename):
    with open(filename) as f:
        return yaml.safe_load(f)


def save_json(data, filename):
    with open(filename, "w") as f:
        json.dump({"items": data}, f, ensure_ascii=False, indent=" "*4)


def save_text(text, filename):
    with open(filename, "w") as f:
        f.write(text)


def create_printable_html(codes):
    figures = [
        f'''
        <div class="figure">
            <img class="qrcode" src="{code}.png">
            <p>{code}</p>
        </div>''' for code in codes]

    css = '''
    body {
        width: 21cm;
    }

    .qrcode {
        width: 4cm;
        height: 4cm;
    }


    .figure {
        float:left;
    }

    p {
        margin: 0;
        margin-bottom: 2em;
        text-align: center;
    }

    @page {
        size: 21cm 29.7cm;
        margin: 0 0 0 0;
    }
    '''

    return f'''
    <html>
        <style>
            {css}
        </style>
        <body>
            {"".join(figures)}
        </body>
    </html>
    '''


def main():
    data = load_yaml("data.yaml")

    makedirs("build", exist_ok=True)

    save_json(data, "../adamas-app/public/data.json")
    save_json(data, "build/data.json")

    for key in data.keys():
        qrcode.make(key).save(f"build/{key}.png")

    html = create_printable_html(data.keys())
    save_text(html, "build/index.htmt")
