import { useState } from "react";

export default function Usuario(){
    const [usuarioNome, setUsuarioNome] = useState("catanacomics");
    const [usuarioImagem, setUsuarioImagem] = useState("/img/catanacomics.svg");

    const dados = [
        {imagem: usuarioImagem, tipoImagem: "imagem de perfil", nomeDoUsuario: usuarioNome,}
    ];

    function alterarNome(){
        //criar tela de prompt para receber a alteração de nome
        //<TelaAlterarNome/>
        const nomeNovo = prompt("Insira seu nome: ");
        if(nomeNovo!==""){
            setUsuarioNome(nomeNovo);
        }
        return;
    }
    function alterarImagem(){
        const imagemNova = prompt("Insira a nova imagem: ");
        if(imagemNova!==""){
            setUsuarioImagem(imagemNova);
        }
        return;
    }

    return (
        <>
            {dados.map((dado)=>(
            <DadosDoUsuario imagem={dado.imagem} tipoImagem={dado.tipoImagem}
            nomeDoUsuario={dado.nomeDoUsuario} funcaoAlterarNome={alterarNome} funcaoAlterarImagem={alterarImagem}/>
            ))}
        </>
    );
}

function DadosDoUsuario(props){
    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={props.funcaoAlterarImagem} src={props.imagem} alt={props.tipoImagem}/>
            <div class="texto">
                <span>
                    <strong data-test="name">{props.nomeDoUsuario}</strong>
                    <ion-icon data-test="edit-name" onClick={props.funcaoAlterarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}