import reflex as rx
import pythonProject.styles.styles as styles
from pythonProject.styles.styles import Size


def menu() -> rx.Component:
    return rx.vstack(
        rx.center(

        rx.image(src="NuestroMenu.mp4", width="1000px", height="auto"),
            align="center",
            padding_x="25em",


        ),
        rx.center(
        rx.grid(
            rx.box(
                rx.image(src="menu2.png", width="100%", height="auto")
            ),
            rx.box(
                rx.image(src="menu1.png", width="100%", height="auto")
            ),
            width="100%",
            spacing="5",
            columns="2"
        ),
        margin=Size.BIG.value,
    ),
    )