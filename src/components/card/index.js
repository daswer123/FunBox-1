import React, { useEffect, useState } from "react";
import "./card.scss";

 const Card = ({cardData}) => {

    // Создаём стейт для каждого компонента, который будет отвечать за то , выбран элемент или нет
    const [type,setType] = useState("default");
    const colors = setColor(type) 
    
    // Если у компонента есть поле disabled, то мы присвоим другим тэгам этот класс
    const disabled = cardData.disabled ? "disabled" : "";

    // Если элемент отключён, то при первом рендере, это будет отображатся
    useEffect(() => {
        if (disabled){
            setType("disabled")
        }
    },[])

    const { foodName, innerBox,weight } = cardData;
    let { textOnSelect } = cardData  

    

    //Определяем текст в  зависимости от стейта
    textOnSelect = type === "default" 
    ? <p className="card--type">Чего сидишь? Порадуй котэ, <a href="/" onClick={(e) => onLinkSelect(e)}>купи.</a></p>
    : <p className="card--type">{textOnSelect}</p>

    if (disabled){
        textOnSelect = <p className="disabled--text">Печалька, с {foodName} закончились</p>
    }

    //Меняем стейт при клике на элемент и ссылку, при этом учитываем отключенный элемент
    function  onSelect(){
        if (disabled){
            return
        }
        type === "default" ? setType("selected") : setType("default")
    }

    //Специальная функция для ссылке, что бы отменить дефолтный переход
    function onLinkSelect(e) {
        e.preventDefault();
        onSelect();
    }
    
     return (
         <li className={"products--item card "+type} key={cardData.foodName}>
            <section className={disabled ? "disabled" : "available"}>
            <section className={"card--top "+ colors.before} onClick={() => onSelect()}>
                <div className="corner"></div>
                <div className={"card--top-content " + colors.border}>
                    <p className="promo-text">Сказачное заморское явство</p>
                    <p className="promo-text onSelect" style={{color: " #e62e7a"}}>Котэ не одобряет</p>
                </div>
            </section>
            <section className={"card--content "+ colors.border} onClick={() => onSelect()}>
                <h2 className="card--title">Нямушка</h2>
                <b className="card--with-food">c {foodName}</b>
                <ul className="card--innerBox-list">
                    {innerBox.map((present,key) => {
                        const amout = present.match(/\d*\d/gi); // Если в строчке есть числа, то регулярные выражения отделят их
                        const text = present.replace(/\d*\d/gi,""); // После того, как они отделили их, числам задаётся специальный класс для выделения
                        return <li className="card--innerBox-item" key={key}>
                                    <span className="amount">{amout}</span>
                                    {text}
                                </li>
                    })}
                </ul>
                <div className={'card--weight ' + colors.background}>
                    <p>{weight}
                        <span>кг</span>
                    </p>
                </div>
            </section>
            {textOnSelect}
            </section>
        </li>
     )


     function setColor(type){  // Функция для определения ключевых классов для компонента
        const colors = {};
        switch (type){
            case "default":
                colors.border = "";
                colors.background = "";
                colors.before = "";
                break
            
            case "selected":
                colors.border = " selectedBorder";
                colors.background = " selectedBackground";
                colors.before = "before"
                break

            case "disabled" :
                colors.border = " selectedBorderDisabled";
                colors.background = " selectedBackgroundDisabled";
                colors.before = "beforeDisabled"
        }

        return colors
    }
 }

 export default Card