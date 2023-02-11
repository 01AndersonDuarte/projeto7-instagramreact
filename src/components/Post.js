import { useState } from "react";

export default function Post(props){
    const [estadoDoLike, setEstadoDoLike] = useState("heart-outline");
    const [estadoDoPost, setEstadoDoPost] = useState("bookmark-outline");
    const [numeroDeLikes, setNumeroDeLikes] = useState(parseInt(Math.random()*2000));
    function curtiu(clickImagem){
        if(estadoDoLike==="heart-outline"){
            setEstadoDoLike("heart");
            setNumeroDeLikes(numeroDeLikes+1);
            return;
        }else if(clickImagem === true){
            setEstadoDoLike("heart");
            return;
        }
        setEstadoDoLike("heart-outline");
        setNumeroDeLikes(numeroDeLikes-1);
    }
    function salvarPost(){
        if(estadoDoPost==="bookmark-outline"){
            setEstadoDoPost("bookmark");
            return;
        }
        setEstadoDoPost("bookmark-outline");
    }
    return (
        <div data-teste="post" onDoubleClick={()=>curtiu(true)} class="post">
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
                <img data-test="post-image" src={props.imagemPost} alt={props.imagemNomePost}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={curtiu} class={estadoDoLike} name={estadoDoLike}></ion-icon>
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