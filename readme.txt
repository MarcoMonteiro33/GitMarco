comandos git

git config --global user.name "Nome Sobrenome" 
git config --global user.email "seu_email@email.com"

git --version
git init
git status
git add nome_arquivo
git commit -m"mensage pra grvar no log"
git log
git log --decorate
git log --author="nomeautor"
git shortlog
git shortlog -sn
git diff
git diff --name-only
git comiit -am"mansagem do comiit para arquivo existentes"
git checkout nomeArquivo.txt
git reset head nomeArquivo
git reset --soft hashCommit que deseja ficar
git reset --mixed hashCommit que deseja ficar
git reset --hard hashCommit que deseja ficar

abrir o Git bash colocar

ssh-keygen -t rsa -b 4096 -C "marco.mont33@gmail.com"

copiar a chave C:\Users\marco.monteiro\.ssh

arquivo id_rsa.pub


git remote add origin https://github.com/MarcoMonteiro33/JavaScript.git
git remote add origin https://github.com/MarcoMonteiro33/JavaScript.git

git remote
git remote --v
git push -u origin master

git push origin master:refs/heads/origin

git push origin origin --delete

git remote add remote_marco git@github.com:MarcoMonteiro33/JavaScript.git

ssh -T git@MarcoMonteiro33

git push -u remote_marco master

origin
