Ici je mettrais toutes mes notes et SURTOUT les sites qui me servent de references !!
Je t'encourage a faire de meme

pour l'installation de red_tetris_boilerplate j'ai fait `npm install --legacy-peer-deps` et il semblerait que ça marche

restart avec vite -> react + javascript only

restart avec JUSTE react... `npx create-react-app my-app`

## idées pour les bonus
* la mise en place d'un score en mode solo avec un ranking
* un autre mode solo ou on peut echanger la pièce en cours et la future piece (existe sur le tetris 99)
* un mode solo plus hard où on a pas de preview de la future piece
* une room avec mdp pour que des amis puissent jouer ensemble
* un ranking


## grille d'eval
* https://github.com/zanninso/42-correction-files/blob/master/red-tetris.pdf

## liens utiles
* https://tetris.wiki/Tetromino
* qu'est ce un test unitaire : https://fr.yeeply.com/blog/test-unitaire-comment-sy-prendre/
* pour socket io en general : https://www.valentinog.com/blog/socket-react/
* qui detaille comment communiquer serveur -> client et vice-versa : https://socket.io/docs/v4/emitting-events
* Parce que avec la nouvelle version de socket io ils te forcent a parametrer des choses par rapport aux cors (quand tu fais des requetes vers d'autres sites) : https://stackoverflow.com/questions/65566462/how-to-fix-this-cors-issue-in-socket-io
* varaibles en CSS : https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties
* https://react-redux.js.org/introduction/getting-started
* toaster https://react-hot-toast.com/
* Hash-based url : https://upmostly.com/tutorials/what-is-hash-routing
* pourquoi on garde le / après le # : https://stackoverflow.com/questions/71398624/hashrouter-no-slash-with-react-router-dom-v6
* React Redux Tutorial : https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&pp=iAQB
# Lancer

```
docker compose up --build
```
http://localhost:3000


# commandes utiles venant du tuto redux
* `npm instal redux` a lancer au tout debut dans le container
* run `node index` pour lancer les tests dans un terminal du fichier index.js (dans le container)
* `node bouh` pour lancer les tests dans un terminal du fichier bouh.js
* `npm install redux-logger` dans le container pour installer la lin redux-logger
