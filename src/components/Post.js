import { useState } from "react";

export default function Post(props){
    const [estadoDoLike, setEstadoDoLike] = useState("");
    let [estadoIconeDoLike, setEstadoIconeDoLike] = useState("heart-outline");
    let [estadoIconeNoPost, setEstadoIconeNoPost] = useState("escondido");
    const [estadoDoPost, setEstadoDoPost] = useState("bookmark-outline");
    const [numeroDeLikes, setNumeroDeLikes] = useState(parseInt(Math.random()*2000));
    
    function curtiu(){
        setEstadoDoLike("likeNoPost");
        setEstadoIconeDoLike("heart");
    }
    function likeUnicoClick(){
        if(estadoDoLike===""){
            curtiu();
            setNumeroDeLikes(numeroDeLikes+1);
            return;
        }
        setEstadoDoLike("");
        setEstadoIconeDoLike("heart-outline");
        setNumeroDeLikes(numeroDeLikes-1);
    }
    function likeDuploClick(){
        if(estadoDoLike===""){
            curtiu();
            setNumeroDeLikes(numeroDeLikes+1);
            setEstadoIconeNoPost("likeEfeitoDuploClick");
            setTimeout(()=>setEstadoIconeNoPost("escondido"), 500);
            return;
        }
        curtiu();
        setEstadoIconeNoPost("likeEfeitoDuploClick");
        setTimeout(()=>setEstadoIconeNoPost("escondido"), 500);
    }
    function salvarPost(){
        if(estadoDoPost==="bookmark-outline"){
            setEstadoDoPost("bookmark");
            return;
        }
        setEstadoDoPost("bookmark-outline");
    }
    return (
        <div data-teste="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemUsuario} alt={props.nomeUsuario}/>
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onDoubleClick={likeDuploClick} src={props.imagemPost} alt={props.imagemNomePost}/>
                <ion-icon class={estadoIconeNoPost} name="heart"></ion-icon>

            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={likeUnicoClick} class={estadoDoLike} name={estadoIconeDoLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvarPost} name={estadoDoPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemUsuarioCurtiu} alt={props.nomeUsuarioCurtiu}/>
                    <div class="texto">
                        Curtido por <strong>{props.nomeUsuarioCurtiu}</strong> e <strong data-test="likes-number">outras {numeroDeLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}