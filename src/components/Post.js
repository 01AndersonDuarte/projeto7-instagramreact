import { useState } from "react";

export default function Post(props){
    const [estadoDoLike, setEstadoDoLike] = useState("heart-outline");
    const [estadoDoPost, setEstadoDoPost] = useState("bookmark-outline");

    function curtiu(clickImagem){
        if(estadoDoLike==="heart-outline" || clickImagem === true){
            setEstadoDoLike("heart");
            return;
        }
        setEstadoDoLike("heart-outline");
    }
    function salvarPost(){
        if(estadoDoPost==="bookmark-outline"){
            setEstadoDoPost("bookmark");
            return;
        }
        setEstadoDoPost("bookmark-outline");
    }
    
    return (
        <div onDoubleClick={()=>curtiu(true)} class="post">
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
                <img src={props.imagemPost} alt={props.imagemNomePost}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtiu} class={estadoDoLike} name={estadoDoLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} name={estadoDoPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemUsuarioCurtiu} alt={props.nomeUsuarioCurtiu}/>
                    <div class="texto">
                        Curtido por <strong>{props.nomeUsuarioCurtiu}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}