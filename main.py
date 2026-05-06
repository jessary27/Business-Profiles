from fasthtml.common import *
from starlette.responses import HTMLResponse
import os

app, rt = fast_app()

@rt("/")
def get():
    html_path = os.path.join(os.path.dirname(__file__), "public", "glean_intelligence_brief.html")
    with open(html_path, "r") as f:
        return HTMLResponse(f.read())
