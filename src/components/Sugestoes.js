export default function Sugestoes(){
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
                <Sugestao imagemSugestao="/img/bad.vibes.memes.svg" nomeUsuarioSugestao="bad.vibes.memes"/>
                <Sugestao imagemSugestao="/img/chibirdart.svg" nomeUsuarioSugestao="chibirdart"/>
                <Sugestao imagemSugestao="/img/razoesparaacreditar.svg" nomeUsuarioSugestao="razoesparaacreditar"/>
                <Sugestao imagemSugestao="/img/adorable_animals.svg" nomeUsuarioSugestao="adorable_animals"/>
                <Sugestao imagemSugestao="/img/smallcutecats.svg" nomeUsuarioSugestao="smallcutecats"/>
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