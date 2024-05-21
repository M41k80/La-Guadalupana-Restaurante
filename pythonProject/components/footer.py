import reflex as rx
import datetime

from reflex_motion import motion

from pythonProject.styles.styles import Size, Spacing
from pythonProject.styles.colors import Color
import pythonProject.styles.styles as styles




def footer() -> rx.Component:
    return rx.vstack(

        rx.center(

            motion(

            rx.image(src="Horario.png", width="1500px", height="auto"),
            align="center",
            padding_x="25em",
                className="box",
                initial={"opacity": 0, "scale": 0.5},
                animate={"opacity": 1, "scale": 1},
                transition={
                    "duration": 9,
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
            motion(
            rx.image(src="horarios.png", width="auto", height="auto"),
            align="center",
            padding_x="25em",
                className="box",
                initial={"opacity": 0, "scale": 0.5},
                animate={"opacity": 1, "scale": 1},
                transition={
                    "duration": 12,
                    "ease": [0, 0.71, 0.2, 1.05],

                    "type": "tween",
                    "damping": 1,
                    "stiffness": 70,
                    "restDelta": 0.011,

                    "repeat": "1",
                    "repeatType": "loop"
                }

            ),
        ),
        rx.link(
            motion(
            rx.image(src="order.png", width="auto", height="auto"),
            align="center",
            padding_x="25em",
                className="box",
                initial={"opacity": 0, "scale": 0.5},
                animate={"opacity": 1, "scale": 1},
                transition={
                    "duration": 50,
                    "ease": [0, 0.71, 0.2, .9],

                    "type": "spring",
                    "damping": 4,
                    "stiffness": 70,
                    "restDelta": 0.011,

                    "repeat": "1",
                    "repeatType": "loop"
                }


            ),
            href="tel:+14802316805",


        ),



        rx.center(
            rx.vstack(
                rx.center(
                    rx.text("Como llegar / How to Get", style=styles.title),
                    align="center"
                ),
                rx.center(
                    rx.html(
                        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108469.64458321365!2d-102.4411363!3d31.8338046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbcbe4c356a879%3A0x23569a04feeb9340!2sRestaurant%20La%20Guadalupana!5e0!3m2!1ses-419!2sus!4v1716167059374!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                    ),
                ),
                width="100%"
            ),
            padding_y="4em",


        ),

        rx.image(
            src="/m41k80.ico",
            height="6em",
            width="6em",
            alt="Logotipo de M41k80. Una \"eme\" entre llaves."
        ),
        rx.link(
            rx.box(
                f"© {datetime.date.today().year} ",

                rx.text(
                    "Powered by m41k80 (Magdiel Mora)",

                    as_="span",
                    color=Color.PRIMARY.value
                ),
                " v1.",
                padding_top=Size.DEFAULT.value
            ),href="https://www.linkedin.com/in/jose-magdiel-mora-perez-0384492b9/",

            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.link(
            rx.hstack(
                rx.image(
                    src="/favicon.ico",
                    height=Size.LARGE.value,
                    width=Size.LARGE.value,
                    alt="Logo Reflex"
                ),
                rx.text(
                    "BUILDING SOFTWARE WITH ♥.",
                    color=Color.SECONDARY.value,
                    font_size=Size.MEDIUM.value,
                    margin_top=Size.SMALL.value
                ),
            ),

            is_external=True
        ),




        align="center",
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.VERY_BIG.value,
        padding_x=Size.BIG.value,
        padding_y="7em",
        spacing=Spacing.ZERO.value,
        color=Color.PRIMARY.value,

    )