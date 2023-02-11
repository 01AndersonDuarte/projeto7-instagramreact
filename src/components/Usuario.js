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
        let nomeNovo = prompt("Insira seu nome: ");
        if(nomeNovo!==""){
            setUsuarioNome(nomeNovo);
        }
        return;
    }
    function alterarImagem(){
        let imagemNova = prompt("Insira a nova imagem: ");
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
            <img onClick={props.funcaoAlterarImagem} src={props.imagem} alt={props.tipoImagem}/>
            <div class="texto">
                <span>
                    <strong>{props.nomeDoUsuario}</strong>
                    <ion-icon onClick={props.funcaoAlterarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}