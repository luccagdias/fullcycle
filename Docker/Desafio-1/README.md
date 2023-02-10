# Desafio 1

### Objetivo
* Publicar uma imagem no DockerHub que quando executada exiba o resultado `Full Cycle Rocks!!`
* Usar a linguagem Go para gerar a mensagem
* A imagem deve ser menos de 2MB

<br>

### Resultado
Para baixar a imagem e rodar o container, executar o comando:
```
docker run luccagdias/fullcycle
```

Para que a imagem tivesse menos de 2MB, usei o conceito de Multistage Building. No Dockerfile, primeiro utilizei a imagem oficial do Go com Alpine para fazer o build e gerar o binário do arquivo que exibirá a mensagem.

Depois de concluída essa etapa, utilizei a imagem _"scratch"_ (que possui apenas o suficiente para que o binário seja executado) e copiei o binário para dentro dela.
