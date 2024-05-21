import reflex as rx
from pythonProject.styles.colors import Color
from pythonProject.styles.styles import Size

from reflex_motion import motion


def navbar() -> rx.Component:
    return rx.center(

        rx.flex(
            rx.link(
            rx.button(
                rx.icon("phone-forwarded", stroke_width=2),
                " ORDER ",size="4",
                order_radius="2em",
                box_shadow="0 20px 30px -10px",
                background_image="linear-gradient(144deg,#F985E4,60%,#0A0136)",
                box_sizing="border-box",
                color="#F9D030",
                opacity=4,
                font_family="Trattatello",
                _hover={
                    "opacity": 0.8,
                },

            ),
                href="#welcome",
        ),


            rx.link(
            rx.button(
                rx.icon("utensils"),
                "MENU",size="4",
                order_radius="1em",
                box_shadow="0 20px 30px -10px",
                background_image="linear-gradient(144deg,#F985E4,60%,#0A0136)",
                box_sizing="border-box",
                color="#F9D030",
                opacity=4,
                font_family="Trattatello",
                _hover={
                    "opacity": 0.8,
                },
            ),


            href="#menu",


        ),

            spacing="9",
        ),
            rx.center(



                rx.image(
                    src="/LaGuadalupanalogo.png",
                    border_radius="1px",
                    border_width="thick",
                    width="50%",

                ),




            ),
        rx.flex(
            rx.link(
            rx.button(
                rx.icon("image"),
                "GALLERY",size="4",
                order_radius="1em",
                box_shadow="0 20px 30px -10px",
                background_image="linear-gradient(144deg,#F985E4,60%,#0A0136)",
                box_sizing="border-box",
                color="#F9D030",
                opacity=4,
                font_family="Trattatello",
                _hover={
                    "opacity": 0.8,
                },
            ),
                href="#gallery",

            ),

    rx.link(
    rx.button(
        "CONTACT US",size="4",
                order_radius="1em",
                box_shadow="0 20px 30px -10px",
                background_image="linear-gradient(144deg,#F985E4,60%,#0A0136)",
                box_sizing="border-box",
                color="#F9D030",
                opacity=4,
                font_family="Trattatello",
                _hover={
                    "opacity": 0.8,
                },
    ),
        href="#footer",
    ),
            spacing="9",


        ),










    position = "sticky",
    bg = Color.BACKGROUND.value,
    padding_x = Size.BIG.value,
    padding_y = Size.DEFAULT.value,
    z_index = "999",
    top = "0"

    )

