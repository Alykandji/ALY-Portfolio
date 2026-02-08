# 🚀 Portfolio Professionnel - Aly Kandji

## 📋 Contenu du Package

Votre portfolio comprend 4 fichiers essentiels :

1. **index.html** - Structure HTML de votre site
2. **style.css** - Styles CSS séparés (design moderne et responsive)
3. **script.js** - JavaScript pour les interactions
4. **profile-image.jpg** - Votre photo de profil
5. **README.md** - Ce fichier d'instructions

## 🎨 Caractéristiques

✅ **Design Moderne & Élégant**
- Palette de couleurs professionnelle (bleu marine, orange, turquoise)
- Typographie sophistiquée (Playfair Display + Manrope)
- Animations fluides et micro-interactions
- Effets de parallaxe et transitions

✅ **100% Responsive**
- Adapté pour ordinateurs de bureau
- Optimisé pour tablettes
- Parfaitement fonctionnel sur mobiles
- Menu hamburger pour mobile

✅ **Sections Complètes**
- Hero avec votre photo et présentation
- Services détaillés (5 catégories)
- Compétences techniques avec barres de progression
- Formulaire de contact intégré à WhatsApp
- Footer professionnel

✅ **Fonctionnalités Avancées**
- Navigation smooth scroll
- Formulaire connecté à WhatsApp
- Animations au scroll
- Curseur personnalisé
- Optimisé pour le SEO

## 📱 Installation & Utilisation

### Option 1 : Utilisation Locale (Tester sur votre ordinateur)

1. Créez un nouveau dossier sur votre ordinateur (ex: "MonPortfolio")
2. Placez les 4 fichiers dans ce dossier :
   - index.html
   - style.css
   - script.js
   - profile-image.jpg
3. Double-cliquez sur `index.html` pour ouvrir dans votre navigateur

### Option 2 : Mise en ligne (Hébergement Gratuit)

#### A. Avec GitHub Pages (Recommandé - GRATUIT)
1. Créez un compte sur https://github.com
2. Créez un nouveau repository nommé `votre-nom.github.io`
3. Uploadez tous les fichiers
4. Allez dans Settings > Pages
5. Activez GitHub Pages
6. Votre site sera accessible à : `https://votre-nom.github.io`

#### B. Avec Netlify (Très Simple - GRATUIT)
1. Allez sur https://www.netlify.com
2. Créez un compte gratuit
3. Glissez-déposez votre dossier sur Netlify
4. Votre site est en ligne instantanément !

#### C. Avec 000webhost (Hébergement classique - GRATUIT)
1. Créez un compte sur https://www.000webhost.com
2. Créez un site web
3. Uploadez vos fichiers via le gestionnaire de fichiers
4. Votre site sera accessible

#### D. Avec Vercel (Pour développeurs - GRATUIT)
1. Allez sur https://vercel.com
2. Importez votre projet
3. Déploiement automatique

## 🔧 Personnalisation

### Modifier vos informations de contact

Ouvrez `index.html` et cherchez la section Contact (ligne ~428) :
```html
<a href="tel:+221770573026">77 057 30 26</a>
<a href="mailto:alykandji7@gmail.com">alykandji7@gmail.com</a>
```

### Changer les couleurs

Ouvrez `style.css` et modifiez les variables au début du fichier (lignes 4-18) :
```css
--primary-color: #0a192f;    /* Couleur principale */
--accent-color: #f97316;     /* Couleur accent */
--secondary-color: #64ffda;  /* Couleur secondaire */
```

### Modifier les services

Dans `index.html`, section Services (ligne ~69), vous pouvez :
- Ajouter de nouveaux services
- Modifier les descriptions
- Changer les icônes

### Ajuster les compétences

Dans `index.html`, section Compétences (ligne ~200), modifiez :
- Les noms des compétences
- Les pourcentages (style="width: 95%")
- Ajoutez de nouvelles catégories

## 📞 Configuration du Formulaire de Contact

Le formulaire de contact est configuré pour envoyer les messages **directement sur votre email** via **Formspree**.

### ✅ Configuration Actuelle

Votre formulaire est déjà configuré avec votre compte Formspree :
- **URL Formspree** : https://formspree.io/f/mqedzvgv
- **Email de réception** : alykandji7@gmail.com

### 📧 Comment ça fonctionne ?

1. Un visiteur remplit le formulaire sur votre site
2. Il clique sur "Envoyer le message"
3. Le message est envoyé via Formspree
4. Vous recevez un email sur **alykandji7@gmail.com**
5. Le visiteur voit une notification de confirmation

### 🔧 Modifier l'Email de Réception

Si vous voulez changer l'email où vous recevez les messages :

1. Allez sur https://formspree.io
2. Connectez-vous à votre compte
3. Créez un nouveau formulaire
4. Copiez la nouvelle URL (ex: https://formspree.io/f/XXXXXXXX)
5. Dans `index.html`, ligne ~449, remplacez :
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/mqedzvgv" method="POST">
   ```
   Par :
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/VOTRE_NOUVEAU_ID" method="POST">
   ```
6. Dans `script.js`, ligne ~103, remplacez également l'URL

### 🎨 Personnalisation Formspree

Dans votre compte Formspree, vous pouvez :
- ✅ Configurer une page de redirection après envoi
- ✅ Ajouter un message de confirmation personnalisé
- ✅ Activer la protection anti-spam (reCAPTCHA)
- ✅ Recevoir des notifications par email
- ✅ Exporter les soumissions en CSV
- ✅ Voir les statistiques des messages

### 📊 Fonctionnalités Activées

✅ **Envoi AJAX** - Le formulaire s'envoie sans recharger la page
✅ **Notifications visuelles** - Message de succès ou d'erreur
✅ **Validation** - Tous les champs sont vérifiés
✅ **Protection** - Formspree inclut une protection anti-spam
✅ **Responsive** - Fonctionne sur tous les appareils

### 🔒 Sécurité

- Formspree filtre automatiquement le spam
- Les emails sont envoyés de manière sécurisée
- Vos données sont protégées
- Aucune information sensible n'est exposée

### 💡 Limites du Plan Gratuit Formspree

- **50 soumissions par mois** (largement suffisant pour démarrer)
- Si vous dépassez, vous pouvez passer au plan payant (8$/mois)
- Ou créer plusieurs comptes Formspree gratuits

## 📞 Configuration WhatsApp (BONUS)

Si vous voulez aussi recevoir les messages sur WhatsApp, voici comment faire :

## 🌐 Ajouter un Nom de Domaine Personnalisé

Une fois votre site en ligne, vous pouvez acheter un nom de domaine :

1. **Acheter un domaine** (10-15€/an) :
   - Namecheap : https://www.namecheap.com
   - OVH : https://www.ovh.com
   - Google Domains : https://domains.google

2. **Connecter le domaine** :
   - GitHub Pages : Suivez leur guide DNS
   - Netlify : Configuration automatique
   - 000webhost : Ajoutez dans les paramètres

## 🎯 Optimisation SEO

Pour améliorer votre référencement Google :

1. Ajoutez un fichier `robots.txt`
2. Créez un fichier `sitemap.xml`
3. Ajoutez des balises meta dans le `<head>`
4. Optimisez vos images
5. Ajoutez Google Analytics

## 📊 Fonctionnalités Techniques

### Responsive Breakpoints
- Desktop : > 1024px
- Tablette : 768px - 1024px
- Mobile : < 768px
- Petit mobile : < 480px

### Technologies Utilisées
- HTML5 sémantique
- CSS3 (Variables, Flexbox, Grid, Animations)
- JavaScript Vanilla (ES6+)
- Google Fonts (Playfair Display, Manrope)
- SVG pour les icônes

### Compatibilité Navigateurs
✅ Chrome (dernières versions)
✅ Firefox (dernières versions)
✅ Safari (dernières versions)
✅ Edge (dernières versions)
✅ Mobiles (iOS, Android)

## 🚀 Améliorations Futures (Optionnel)

Vous pouvez ajouter :
- Un blog pour partager vos projets
- Une galerie de réalisations
- Des témoignages clients
- Un système de réservation
- Une boutique en ligne
- Un chat en direct
- Google Maps pour votre localisation
- Connexion avec vos réseaux sociaux

## 📞 Support

Pour toute question ou modification :
- Email : alykandji7@gmail.com
- Téléphone : 77 057 30 26 / 76 014 40 11
- Localisation : Mbour, Thiès, Sénégal

## 📄 Licence

Ce portfolio est créé pour Aly Kandji - Tous droits réservés 2024

---

**Développé avec ❤️ au Sénégal 🇸🇳**

Bonne chance avec votre nouveau portfolio professionnel ! 🎉
