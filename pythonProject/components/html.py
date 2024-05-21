import reflex as rx
import pythonProject.styles.styles as styles
from pythonProject.styles.styles import Size


def anchor(id: str) -> rx.Component:
    return rx.vstack(
        rx.html('<a id=' + id + '></a>'),
        rx.text(".", style=styles.title),
        top="200px",

    )