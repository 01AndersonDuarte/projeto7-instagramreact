export default function Posts(){
    return (
        <div class="posts">
            <Post
                imagemUsuario="/img/meowed.svg" nomeUsuario="meowed"
                imagemPost="/img/gato-telefone.svg" imagemNomePost="gato-telefone"
                imagemUsuarioCurtiu="/img/respondeai.svg" nomeUsuarioCurtiu="respondeai"
            />

            <Post
                imagemUsuario="/img/barked.svg" nomeUsuario="barked"
                imagemPost="/img/dog.svg" imagemNomePost="dog"
                imagemUsuarioCurtiu="/img/adorable_animals.svg" nomeUsuarioCurtiu="adorable_animals"
            />
        </div>
    );
}

function Post(props){
    return (
        <div class="post">
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
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
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