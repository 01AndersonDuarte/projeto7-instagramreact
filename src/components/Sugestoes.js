export default function Sugestoes(){
    const arraySugestoes = [
        {imagemSugestao: "/img/bad.vibes.memes.svg", nomeUsuarioSugestao: "bad.vibes.memes"},
        {imagemSugestao: "/img/chibirdart.svg", nomeUsuarioSugestao: "chibirdart"},
        {imagemSugestao: "/img/razoesparaacreditar.svg", nomeUsuarioSugestao: "razoesparaacreditar"},
        {imagemSugestao: "/img/adorable_animals.svg", nomeUsuarioSugestao: "adorable_animals"},
        {imagemSugestao: "/img/smallcutecats.svg", nomeUsuarioSugestao: "smallcutecats"},
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {arraySugestoes.map((sugestao)=><Sugestao imagemSugestao={sugestao.imagemSugestao} nomeUsuarioSugestao={sugestao.nomeUsuarioSugestao}/>)}
        </div>
        );
}
function Sugestao(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemSugestao} alt={props.nomeUsuarioSugestao}/>
                <div class="texto">
                    <div class="nome">{props.nomeUsuarioSugestao}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
        );
}