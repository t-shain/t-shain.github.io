#!/usr/bin/env python3


# run with `$ python3 new-post title path_to_source`

import os
import sys
import readline
from datetime import datetime
from pathlib import Path


def _path_completer(text, state):
    text = os.path.expanduser(text)
    dir_, prefix = os.path.split(text)
    base = dir_ or "."
    try:
        names = os.listdir(base)
    except OSError:
        return None
    matches = [
        os.path.join(dir_, n) + ("/" if os.path.isdir(os.path.join(base, n)) else "")
        for n in names
        if n.startswith(prefix)
    ]
    return matches[state] if state < len(matches) else None


readline.set_completer(_path_completer)
readline.set_completer_delims(" \t\n")
# macOS ships libedit instead of GNU readline — binding syntax differs
if "libedit" in getattr(readline, "__doc__", ""):
    readline.parse_and_bind("bind ^I rl_complete")
else:
    readline.parse_and_bind("tab: complete")



def add_post(title, path):
  now = datetime.now()
  date = now.strftime("%Y-%m-%d")
  time = now.strftime("%H:%M:%S")

  filename = Path(f"posts/{title}.html")
      

  if filename.exists():
      print(f"Post for today already exists: {title}")
      sys.exit(1)

  filename.parent.mkdir(exist_ok=True)

  filename.write_text(f"""\
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../style/post.css" />
    <script src="https://md-block.verou.me/md-block.js" type= "module" integrity="sha384-Ar8RzJ+23u7XdD0FsMA6DTDqvlDu0lws3aWKfYjBUbe94gx8XtaRinlkTrkSgO80" crossorigin="anonymous"></script>
  </head>
                      
  <header><a href="../index.html" class="back">[back]</a></header>
                      
  <div>
  <h2 class="subtitle">{time}</h2>                 
  </div>

  <body>
    <md-block src="../{path}">
      loading...
    </md-block>
  </body>
  </html>
  """)

  print(f"Created: {title}")

  # Insert a link to the new post at the top of the list in index.html
  index_path = Path("index.html")
  html = index_path.read_text()

  new_item = (
      f'      <li>\n'
      f'        <a href="{filename}" class="title">{title}</a>\n'
      f'        <span class="subtitle">{date} @ {time}</span>\n'
      f'      </li>\n'
  )

  marker = '<ol class="machine-list">\n'
  if marker not in html:
      print("Warning: could not find post list in index.html — skipping index update")
      sys.exit(0)

  html = html.replace(marker, marker + new_item, 1)
  index_path.write_text(html)
  print(f"Added link to index.html")

    
def main():
  path = input("Path to source for post: ")
  if os.path.exists(path):
    print("File exist")
    title = input("Title: ")
    add_post(title=title, path=path)
  else:
     print("Path does not exist")


main()