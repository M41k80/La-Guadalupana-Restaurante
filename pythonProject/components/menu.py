import reflex as rx
from reflex_motion import motion

import pythonProject.styles.styles as styles
from pythonProject.styles.styles import Size


def menu() -> rx.Component:
    return rx.vstack(
        rx.center(
            motion(

        rx.image(src="Nuestromenu.png", width="1000px", height="auto"),
            align="center",
            padding_x="25em",
                className="box",
                initial={"opacity": 0, "scale": 0.5},
                animate={"opacity": 1, "scale": 1},
                transition={
                    "duration": 5,
                    "ease": [0, 0.71, 0.2, .9],

                    "type": "tween",
                    "damping": 1,
                    "stiffness": 70,
                    "restDelta": 0.011,

                    "repeat": "1",
                    "repeatType": "loop"
                }


            ),


        ),
        rx.center(
        rx.grid(
            rx.box(
                rx.image(src="menu2.png", width="100%", height="auto")
            ),
            rx.box(
                rx.image(src="menu1.png", width="100%", height="auto")
            ),
            width="80%",
            spacing="5",
            columns="2"
        ),
        margin=Size.BIG.value,
    ),
    )