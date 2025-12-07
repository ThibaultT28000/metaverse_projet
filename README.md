# metaverse_projet
Projet A-FRAME pour le cours de Metaverse

Ce projet en 3D réalisé sur A-FRAME représente une version simplifiée de l'arène du "Tenkaichi Budokai". Une arène que l'on retrouve dans les médias Dragon Ball. Il s'agit d'un endroit iconique puisque de nombreux combats importants se déroulant dans l'oeuvre ont été réalisés sur cette scène.

Sol et textures

La scène inclut un sol large recouvert d’une texture d’herbe, ainsi qu’une zone centrale représentant l’arène, texturée avec du sable et des motifs rappelant le ring original.
Les textures sont chargées via <a-assets> pour optimiser le préchargement.

ARENE PRINCIPALE
L’arène est composée de plusieurs éléments statiques :
un plateau central de combat,
des escaliers,
des murs entourant l’espace,
des gradins à gauche et à droite,
une pancarte décorative affichant une image.

CIEL DYNAMIQUE

La scène propose deux ambiances :

Jour (ciel bleu)
Nuit (ciel étoilé)

L’utilisateur peut changer l’ambiance grâce à un bouton interactif, qui modifie dynamiquement l'image présente dans <a-sky>.

SON D'AMBIANCE
Un son de foule est intégré à la scène et se déclenche automatiquement au chargement.
Un bouton Mute / Unmute permet à l’utilisateur d’activer ou de couper l’ambiance sonore à tout moment.

VIDEO

Une vidéo est affichée sur un panneau dans la scène à l’aide de <a-video>.
Elle démarre automatiquement au chargement (en mode silencieux, conformément aux restrictions des navigateurs).
L’utilisateur peut cliquer directement sur la vidéo pour la mettre en pause ou la relancer.

