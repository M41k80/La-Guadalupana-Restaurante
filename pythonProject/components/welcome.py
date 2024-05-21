import reflex as rx
from reflex_motion import motion


def welcome() -> rx.Component:
    return rx.box(
        rx.center(

            rx.link(
                motion(
            rx.image(src="/bienvenido.png",
                     width="100%", height="1000px",
                     #align="center",
                     padding_x="25em",

                     ),
                    className="box",
                    initial={"opacity": 0, "scale": 0.5},
                    animate={"opacity": 1, "scale": 1},
                    transition={
                        "duration": 4,
                        "delay": 4,
                        "ease": [0, 0.71, 0.2, 1.01],
                        "repeat": "1",
                        "repeatType": "loop"

                        # "repeatDelay": 1
                    },



             ),
                href="tel:+14802316805",



            ),
        ),



    )