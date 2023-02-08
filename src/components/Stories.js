export default function Stories(){
    return (
        <div class="stories">
                    
            <Story imagem="/img/9gag.svg" nome="9gag"/>
            <Story imagem="/img/meowed.svg" nome="meowed"/>
            <Story imagem="/img/barked.svg" nome="barked"/>
            <Story imagem="/img/nathanwpylestrangeplanet.svg" nome="nathanwpylestrangeplanet"/>                 
            <Story imagem="/img/wawawicomics.svg" nome="wawawicomics"/>
            <Story imagem="/img/respondeai.svg" nome="respondeai"/>
            <Story imagem="/img/filomoderna.svg" nome="filomoderna"/>
            <Story imagem="/img/memeriagourmet.svg" nome="memeriagourmet"/>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props){
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    );
}