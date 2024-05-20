import reflex as rx

def gallery() -> rx.Component:
    return rx.vstack(
        rx.center(

            rx.image(src="gallery/Gallery.mp4", width="1100px", height="auto"),
            align="center",
            padding_x="25em",


        ),
        rx.center(
        rx.grid(
            rx.box(

                rx.image(src="gallery/gallery99jpg.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",
                         border_radius="20px 20px 20px 20px"),


                    rx.image(src="gallery/gallery8.jpg", width="100%",
                             height="auto", border="2px solid #F9D030", border_radius="20px 20px 20px 20px"),



                    rx.image(src="gallery/gallery7.jpg", width="100%",
                             height="auto", border="2px solid #F9D030", border_radius="20px 20px 20px 20px"),


           ),


            rx.box(
                rx.image(src="gallery/gallery6.jpg", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),
                rx.image(src="gallery/gallery5.HEIC", width="100%",
                         height="auto",border="2px solid #F9D030",border_radius="20px 20px 20px 20px"),
                rx.image(src="gallery/gallery4.HEIC", width="100%",
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
            width="100%"
        ),

        ),
    )