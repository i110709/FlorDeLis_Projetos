function melhorMedia(alunos){
    const melhorAluno = {nome: "", media: 0};
    
    for (const aluno in alunos){
        const nota = alunos[aluno];
        const media = nota.reduce((soma, nota) => soma + nota, 0) / nota.length;

        if (media > melhorAluno.media){
            melhorAluno.nome = aluno;
            melhorAluno.media = media;
        }
    }

    return melhorAluno
}

console.log(melhorMedia({
    Matheus: [0, 0, 5, 2, 10],
    Asafe: [10, 10, 10, 10, 10]
}))