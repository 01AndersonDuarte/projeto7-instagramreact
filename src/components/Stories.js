export default function Stories(){
    const arrayStoriesUsuarios = [
        {imagem: "/img/9gag.svg", nome: "9gag"}, {imagem: "/img/meowed.svg", nome: "meowed"},
        {imagem: "/img/barked.svg", nome: "barked"}, {imagem: "/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet"},
        {imagem: "/img/wawawicomics.svg", nome: "wawawicomics"}, {imagem: "/img/respondeai.svg", nome: "respondeai"},
        {imagem: "/img/filomoderna.svg", nome: "filomoderna"}, {imagem: "/img/memeriagourmet.svg", nome: "memeriagourmet"}
    ];
    return (
        <div class="stories">
            {arrayStoriesUsuarios.map((story)=><Story imagem={story.imagem} nome={story.nome}/>)};
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