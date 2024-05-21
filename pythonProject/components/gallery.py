import reflex as rx
from reflex_motion import motion


def gallery() -> rx.Component:
    return rx.vstack(
        rx.center(

            motion(

            rx.image(src="nuestragallery.png", width="1400px", height="auto"),
            align="center",
            padding_x="25em",
                className="box",
                initial = {"opacity": 0, "scale": 0.5},
                animate = {"opacity": 1, "scale": 1},
                transition = {
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

                rx.image(src="gallery/gallery99jpg.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",
                         border_radius="20px 20px 20px 20px"),


                    rx.image(src="gallery/gallery8.JPG", width="100%",
                             height="auto", border="2px solid #F9D030", border_radius="20px 20px 20px 20px"),



                    rx.image(src="gallery/gallery7.jpg", width="100%",
                             height="auto", border="2px solid #F9D030", border_radius="20px 20px 20px 20px"),


           ),


            rx.box(
                rx.image(src="gallery/gallery6.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),
                rx.image(src="gallery/gallery5.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),
                rx.image(src="gallery/gallery4.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),

            ),

            rx.box(
                rx.image(src="gallery/gallery33.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),

                rx.image(src="gallery/gallery2.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),
                rx.image(src="gallery/gallery1.jpeg", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),


            ),



            rows="1",
            columns="3",
            spacing="3",
            justify="between",
            width="80%"
        ),

        ),
    )