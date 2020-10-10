import React from "react";
import Card from "../card";
import data from "../../data";

import "./cardList.scss";

const cardList = () => {
        return (
        <section className="products">
            <ul className="products--list">
                {data.map((cardData,key) => {  // Получаем данные из файла, в будущем можно будет заменить сервером и передаём туда параметры
                    return (
                        <Card cardData={cardData} key={cardData.foodName}/>
                    )
                })}
            </ul>
        </section>
    )
}

export default cardList