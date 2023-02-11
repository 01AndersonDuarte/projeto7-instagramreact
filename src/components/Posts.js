import arrayObjetosPosts from "./arrayObjetosPosts";
import Post from "./Post";

export default function Posts(){
    return (
        <div class="posts">
            {arrayObjetosPosts.map((post)=>(
                <Post imagemUsuario={post.imagemUsuario} nomeUsuario={post.nomeUsuario} imagemPost={post.imagemPost} imagemNomePost={post.imagemNomePost} imagemUsuarioCurtiu={post.imagemUsuarioCurtiu} nomeUsuarioCurtiu={post.nomeUsuarioCurtiu}/>))};
        </div>
    );
}