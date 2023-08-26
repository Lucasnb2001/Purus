//import React from "react"
import {Carousel, Card, CarouselProduct} from "./"

function HomePage() {
    const booksInfo = [{name: "No Plan B", price: 38}, {name: "Guinnes Worls Records 2023", price: 22}, {name: "Simple One Pan Wonders", price: 51}, {name: "The Bullet that Missed", price: 30}, {name: "Interesting Facts for Curious Minds", price: 16}, {name: "It Starts With Us", price: 29}, {name: "Space Boy", price: 37}, {name: "Lessons in Chemistry", price: 25}, {name: "2023 Guide to the Night Sky", price: 34}]

    return(
        <div className="bg-purus-background">
            <div className="min-w-[800px] max-w-[1300px] m-auto bg-purus-background">
                <Carousel></Carousel>
                <div className="grid grid-cols-3 xl:grid-cols-4 -mt-96">
                    <Card
                        title={'Continuar comprando'}
                        image={'../images/home_grid_7.jpg'}
                        link={'cLique aqui'}
                    
                    />
                    <Card
                        title={'Kindle 11ª geração: mais leve e compacto'}
                        image={"../images/kindle.jpg"}
                        link={" "}
                    />
                    <Card
                        title={"Chegou o novo cartão Amazon sem anuidade"}
                        image={"../images/newCard.jpg"}
                        link={" "}
                    />
                    <Card
                        title={"Lançamentos em bicicletas"}
                        image={"../images/bike.jpg"}
                        link={"Veja mais esportes"}
                    />
                </div>
                <CarouselProduct products={booksInfo}/>
            </div>
        
        </div>
    )
}

export default HomePage