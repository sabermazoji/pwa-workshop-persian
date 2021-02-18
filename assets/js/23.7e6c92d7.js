(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{404:function(t,s,e){"use strict";e.r(s);var n=e(42),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"etape-6-background-sync-et-notifications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etape-6-background-sync-et-notifications"}},[t._v("#")]),t._v(" Etape 6 : Background sync et notifications")]),t._v(" "),e("p",[t._v("Dans cette section, nous allons mettre à profit le Service Worker et une nouvelle API, "),e("strong",[t._v("Background Sync")]),t._v(", pour mettre à jour la liste des participants en tâche de fond et notifier l'utilisateur lorsqu'il y a des nouveaux participants.")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Non standard")]),t._v(" "),e("p",[t._v("L'API Background Sync n'est pas encore standardisée. La "),e("a",{attrs:{href:"https://wicg.github.io/BackgroundSync/spec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("spécification"),e("OutboundLink")],1),t._v(" est toujours à l'étude. Elle est déjà implémentée sur Chrome et Android depuis 2016, et en cours de développement sur Edge et Firefox. Cette API distingue deux types de synchronisation: "),e("em",[t._v("One-Time")]),t._v(" et "),e("em",[t._v("Périodique")]),t._v(". Actuellement, seule la synchronisation "),e("strong",[t._v("One-Time")]),t._v(" est implémentée dans Chrome, et il peut y avoir quelques bugs d'implémentation.")])]),t._v(" "),e("p",[t._v("Concernant les notifications, L'API Push permet aux applications web de recevoir des notifications push poussées depuis un serveur, même lorsque l'application web n'est pas au premier plan et même lorsqu'elle n'est actuellement pas chargée sur l'agent utilisateur. Néanmoins, cela implique l’utilisation côté serveur d’un service de push tel que Google Cloud Messenger.")]),t._v(" "),e("p",[t._v("Dans le cadre de ce workshop, nous n'allons pas utiliser l'API Push mais l'"),e("strong",[t._v("API Notification")]),t._v(". Cette API permet également d'envoyer des notifications sans nécessiter de partie serveur, mais requiert que le navigateur soit ouvert. Ces notifications sont multi-plateformes, elles s’adapteront donc à la plate-forme cible: notifications Android ou centre de notifications de Windows 10 par exemple.")]),t._v(" "),e("h2",{attrs:{id:"notifications-et-permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notifications-et-permissions"}},[t._v("#")]),t._v(" Notifications et permissions")]),t._v(" "),e("p",[t._v("La synchronisation en tâche de fond ne nécessite pas de permissions particulières, en revanche afficher des notifications requiert le consentement de l'utilisateur. Pour éviter le spam, les navigateurs ont ajouté des contraintes à respecter pour pouvoir demander ces permissions. On peut par exemple le faire suite à une action de l'utilisateur comme le clic sur un lien.")]),t._v(" "),e("p",[t._v("Ajoutez donc le lien ci-dessous quelque-part dans la page "),e("code",[t._v("index.html")]),t._v(" pour activer les notifications:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("registerNotification()"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Notify me when there are new attendees"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Puis déclarez la fonction suivante dans "),e("code",[t._v("scripts.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerNotification")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Notification"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestPermission")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("permission")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permission "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"granted"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerBackgroundSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Permission was not granted."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Lorsque l'utilisateur aura donné sa permission d'afficher des notifications, nous appellerons la fonction "),e("code",[t._v("registerBackgroundSync")]),t._v(" pour mettre en place la synchronisation en arrière-plan.")]),t._v(" "),e("h2",{attrs:{id:"synchronisation-en-tache-de-fond"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronisation-en-tache-de-fond"}},[t._v("#")]),t._v(" Synchronisation en tâche de fond")]),t._v(" "),e("p",[t._v("Le client doit explicitement s'inscrire aux tâches de synchronisation en tâche de fond. Pour ce faire, on commence par récupérer une référence à la "),e("code",[t._v("ServiceWorkerRegistration")]),t._v(", qui représente le lien d'enregistrement entre votre Service Worker et votre client. Le plus simple pour cela est d'utiliser "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("navigator.serviceWorker.ready")]),e("OutboundLink")],1),t._v(" qui retourne une "),e("code",[t._v("Promise")]),t._v(" résolue avec la "),e("code",[t._v("ServiceWorkerRegistration")]),t._v(" lorsque le Service Worker est installé et actif.")]),t._v(" "),e("p",[t._v("Une fois l'objet "),e("code",[t._v("registration")]),t._v(" de type "),e("code",[t._v("ServiceWorkerRegistration")]),t._v(" récupéré, nous pouvons appeler la méthode "),e("code",[t._v("registration.sync.register")]),t._v(" pour s'inscrire à une tâche de synchronisation One-Time en arrière-plan.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerBackgroundSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("navigator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Service Worker not supported"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  navigator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ready\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registration")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" registration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sync"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"syncAttendees"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Registered background sync"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error registering background sync"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Côté Service Worker, un évènement de type "),e("code",[t._v("sync")]),t._v(" sera émis lorsque le système décide de déclencher une synchronisation. Cette décision se base sur différents paramètres: la connectivité, l'état de la batterie, la source d'alimentation etc. ; ainsi nous ne pouvons pas être sûrs du moment où la synchronisation est déclenchée. La spécification prévoit des possibilités de paramétrage à terme, mais pour le moment, tout ce que nous pouvons faire est attendre. Toutefois, dans les conditions du workshop, cela ne devrait prendre que quelques secondes.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sync"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sync event"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"syncAttendees"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitUntil")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("syncAttendees")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// on lance la requête de synchronisation")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"actualisation-et-notification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actualisation-et-notification"}},[t._v("#")]),t._v(" Actualisation et notification")]),t._v(" "),e("p",[t._v("La requête de synchronisation est similaire à l'"),e("code",[t._v("update")]),t._v(" et "),e("code",[t._v("refresh")]),t._v(" de l'étape 4, à la différence qu'elle est faite à la demande du système et non du client:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("syncAttendees")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://reqres.in/api/users")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("refresh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("attendees")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n      self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("registration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("showNotification")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("attendees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(" attendees to the PWA Workshop")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Si le client dispose de la permission d'afficher des notifications, la méthode "),e("code",[t._v("self.registration.showNotification")]),t._v(" devrait afficher une notification avec le texte désiré sur le client enregistré.")]),t._v(" "),e("h2",{attrs:{id:"test-de-bon-fonctionnement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-de-bon-fonctionnement"}},[t._v("#")]),t._v(" Test de bon fonctionnement")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Attention")]),t._v(" "),e("p",[t._v("Comme pour les étapes précédentes, assurez-vous que la case "),e("strong",[t._v("Update on reload")]),t._v(" est cochée dans les Developer Tools afin de toujours recharger la dernière version du Service Worker.")])]),t._v(" "),e("p",[t._v("Au clic sur le lien d'activation des notifications, une demande de permission devrait s'afficher. Après avoir accepté, vous devriez observer dans la console le log "),e("code",[t._v("Registered background sync")]),t._v(". Il ne vous reste plus qu'à attendre que le système déclenche une synchronisation et affiche la notification, ce qui devrait prendre quelques secondes, 1 minute tout au plus. Si l'application web est au premier plan, la liste des participants devrait également être actualisée grâce à la fonction "),e("code",[t._v("refresh")]),t._v(" dans "),e("code",[t._v("syncAttendees")]),t._v(".")]),t._v(" "),e("p",[t._v("Vous pouvez cliquer à nouveau sur le lien de notification pour demander une nouvelle requête de synchronisation.")])])}),[],!1,null,null,null);s.default=a.exports}}]);