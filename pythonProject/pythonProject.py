"""Welcome to Reflex! This file outlines the steps to create a basic app."""
import  pythonProject.components.navbar as navbar
import pythonProject.components.footer as footer
import pythonProject.components.welcome as welcome
import pythonProject.components.menu as menu
import pythonProject.components.restaurante as restaurante
import pythonProject.components.html as html
import pythonProject.components.gallery  as gallery
from pythonProject.styles.styles import Size
from rxconfig import config

import reflex as rx

filename = f"{config.app_name}/{config.app_name}.py"


#class State(rx.State):
    #"""The app state."""


def index() -> rx.Component:
    return rx.box(

        navbar.navbar(),

        rx.center(
            rx.vstack(
                html.anchor("welcome"),
                welcome.welcome(),
                html.anchor("gallery"),
                restaurante.restaurante(),
                gallery.gallery(),
                html.anchor("menu"),
                menu.menu(),
            )
        ),
        html.anchor("footer"),
        footer.footer()

    )


app = rx.App(


    style={
        "background": "#0A0136",
        "background_size": "cover",
        "background_repeat": "repeat",


    }
)
app.add_page(index, title="La Guadalupana Restaurante")

