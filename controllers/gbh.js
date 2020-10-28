const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Character = require('../models/character.js');
const User = require('../models/user.js');
const Lobby = require('../models/lobbys.js');

// middleware



// Home route
router.get('/', (req,res)=>{
    Lobby.find({},(error, allLobbies)=>{
        res.render('./characters/homepage.ejs',{
            currentUser: req.session.currentUser,
            lobbies: allLobbies
        })

    })

})

// add lobby route
router.get('/add-lobby',(req,res)=>{
    res.render('./lobby/new.ejs',{currentUser: req.session.currentUser})
})

router.get('/basics', (req,res)=>{
    res.render('./characters/basics.ejs',{currentUser: req.session.currentUser})
})




// Show Route
router.get('/characters', (req,res) =>{
    Character.find({},(error, allCharacters)=>{

        res.render('./characters/show.ejs',{
            characters : allCharacters,
            currentUser: req.session.currentUser

        })
    })
})

// Index route
router.get('/:id', (req,res) =>{
    Character.findById(req.params.id ,(error,char)=>{
        res.render('./characters/index.ejs',{
            character: char,
            currentUser: req.session.currentUser
        })
    })
})

// Index route

router.get('/seed',(req,res)=>{
    Character.create(
        [
          {
            name: 'Beelzebub',
            img: '/img/headshots/beelzebub-headshot.png',
            description: 'One of the Astrals who invaded the Sky Realm thousands of years ago, long before the War broke out. He was sealed away in Pandemonium until the fallen angel Belial released him from his forced slumber. Obsessed with becoming the supreme being, he wields a substance capable of slaying immortals—chaos matter. And at his beck and call is Avatar, the manifestation of destruction. Sky Realm, Astral Realm, Crimson Horizon—his hands will mold these realms into one so that he may stand above all in creation.',
             link: 'https://www.youtube.com/embed/FgmyPWV7dZw'
          },
          {
            name: 'Charlotta',
            img: '/img/headshots/charlotta-headshot.png',
            description: "A Harvin knight who serves as captain of the Lumiel Order of Holy Knights. Strict with herself, but kind to others, she's earned the trust of all her comrades and possesses superlative martial skills. But she also has a childish side, evidenced by her love of the Little Skyfarer's Lunch, a famed kid's meal popular throughout the skydoms. With gusto she swings the Claíomh Solais—a shining blade nearly the same size as its wielder—easily felling monsters that are ten times her size.",
            link: 'https://www.youtube.com/embed/5UWaXdMtX_Q'
          },
          {
            name: 'Djeeta',
            img: '/img/headshots/djeeta-headshot.png',
            description: "This heroine's adventure began when she received a letter from her father asking her to come to the Island of the Astrals, Estalucia. Now she travels the skies with her flying lizard-like buddy, Vyrn, and the mysterious blue-haired girl who saved her life by linking it with her own, Lyria.\n" +
              "// Honest to a fault, she'll come to the aid of anyone who needs her assistance. Although her swordplay is rough and self-taught, she possesses the power to overcome any obstacle—thanks in no small part to Lyria's assistance.",
            link: 'https://youtube.com/embed/-C6iobBCEFM'
          },
          {
            name: 'Ferry',
            img: '/img/headshots/ferry-headshot.png',
            description: "An Erune girl who once resided on the Mist-Shrouded Isle. She became a spirit at the moment of her death. This grim transformation occurred while she was waiting for her frail sister to return home, a period that had lasted well past her death. At Gran and Lyria's behest, she sets out on a journey to discover the whereabouts of her now-grown sibling. In addition to the crack of her whip, she fights with the faithful bite of her ghostly pets, overwhelming her opponents with phantasmagoric assaults.",
            link: 'https://youtube.com/embed/WA11Oo9MSvU'
          },
          {
            name: 'Katalina',
            img: '/img/headshots/katalina-headshot.png',
            description: 'A former imperial knight that abandoned her post to protect Lyria.\n' +
              'When she was loyal to the empire, she was charged with guarding Lyria, but this changed when she caught wind of the twisted experiments that were being performed on the girl. This prompted her to orchestrate an escape for Lyria, the catalyst that began their sky-bound adventures with Gran. As skilled as she is logical, she is a compelling ally who lacks only a sense of direction—and any sort of talent for cooking.',
            link: 'https://youtube.com/embed/XBTEqQrMa08'
          },
          {
            name: 'Gran',
            img: '/img/headshots/gran-headshot.png',
            description: "This hero's adventure began when he received a letter from his father asking him to come to the Island of the Astrals, Estalucia. Now he travels the skies with his flying lizard-like buddy, Vyrn, and the mysterious blue-haired girl who saved his life by linking it with her own, Lyria.\n" +
              "Honest to a fault, he'll come to the aid of anyone who needs his assistance. Although his swordplay is rough and self-taught, he possesses the power to overcome any obstacle—thanks in no small part to Lyria's assistance.",
            link: 'https://www.youtube.com/embed/LNQ0GbhQuv4'
          },
          {
            name: 'Ladiva',
            img: '/img/headshots/ladiva-headshot.png',
            description: "This Draph duelist is the star of the Jewel Resort Casino Liner. In the arena and out, she's purehearted, compassionate, and loving in every sense of the word. Her devotion to fans and formidable strength make for powerhouse performances sure to captivate any audience.",
            link: 'https://youtube.com/embed/RSLM0HANt3Y'
          },
          {
            name: 'Lancelot',
            img: '/img/headshots/lancelot-headshot.png',
            description: 'A dual-wielding master swordsman who serves as the captain of the Order of White Dragons of Feendrache Kingdom. If danger would rear its ugly head in the kingdom he so loves, he would risk both life and limb to see it defeated. Despite this, he can never seem to keep his room clean.\n' +
              '            He rushes across the battlefield at blinding speed, a flurry of shining, crystalline slashes. Those who set eyes on this fighting style immediately recognize why he was made captain of his order.',
            link: 'https://youtube.com/embed/ZAuwM0pc3gQ'
          },
          {
            name: 'Lowain',
            img: '/img/headshots/lowain-headshot.png',
            description: "A free spirit who was all about his part-time job, a good gab sesh with the boys, and a dash of adventure every now and then. That all changed when Katalina visited the restaurant where he worked. It was infatuation at first sight. Determined to follow her, he quit his job and began a new life as the cook on Gran's crew.\n" +
              "            He's a fair hand with a dagger, but with his buddies Elsam and Tomoi there to run interference and baffle opponents, he can really ruin an enemy's day... probably.",
            link: 'https://youtube.com/embed/qpdaLDkpOZg',
            __v: 0
          },
          {
            name: 'Metera',
            img: '/img/headshots/metera-headshot.png',
            description: 'An Erune woman blessed with myriad talents, chief among them the abilities to wield a magic bow and to sustain flight completely unaided. She once acted as a guardian for her home village, watching over an altar where a sinister force was enshrined. But she grew tired of the tiresome regimen and abandoned her post. Now she wanders wherever the wind takes her. Her arrows are a reflection of this freedom—unhindered by any obstacle and sure to find their target. Once she sets her eyes on a mark, there’s nowhere to hide.',
            link: 'https://youtube.com/embed/UH7s_bbCJZc'
          },
          {
            name: 'Vaseraga',
            img: '/img/headshots/vaseraga-headshot.png',
            description: 'This towering Draph warrior belongs to the Society, an organization which hunts primal beasts. He has formed a contract with the seal weapon known as Great Scythe Grynoth.\n' +
              '\n' +
              '            The intimidating size of his blade and his immunity to pain sap opponents of their will to fight. Though his somber bearing and curt speech can make him seem unapproachable, he is in fact a calm, kind person who will always go out of his way to help those in need.\n' +
              '\n' +
              '            His indomitable spirit, raw physical might, and inability to feel pain make for an overwhelmingly aggressive fighting style. Opponents are advised to approach with extreme caution.',
            link: 'https://youtube.com/embed/vyQnVD3q6cA'
          },
          {
            name: 'Narmaya',
            img: '/img/headshots/narmaya-headshot.png',
            description: 'This swordswoman was born into a long line of martial arts masters. Arduous training is the only way her family’s martial arts and magic can merge into her own style of swordplay. Yet for all her accomplishments, she won’t be satisfied until a certain master swordsman acknowledges her for who she is. In the heat of battle she is aloof, but once you get to know her, you’ll find that she’s all heart. She tends to coddle those younger than her, especially kids, which makes her a great babysitter.',
            link: 'https://youtube.com/embed/RigcQ3i1UPo'
          },
          {
            name: 'Percival',
            img: '/img/headshots/percival-headshot.png',
            description: 'He travels to lands far and wide to learn the secrets of statecraft, all in hopes of founding his dream country. Before he set out on a journey to achieve such lofty goals, he and Lancelot served as officers in the same order of knights, studying under the same master. He received his nickname, the Lord of Flames, from the noble way he wields his blazing long sword. Those who come face-to-face with him find themselves either entranced or terrified by his abilities.',
            link: 'https://youtube.com/embed/2X2oudhsaiA'
          },
          {
            name: 'Soriz',
            img: '/img/headshots/soriz-headshot.png',
            description: 'Soriz once tried his hands at wielding a weapon, before he realized that his hands themselves were the ultimate tool for battle. He threw himself wholeheartedly into training his fists, proving to the world his conviction and earning fame as a fearsome warrior. Even now he continues to hone his aged body, always striving for newer peaks.\n' +
              "            Despite his usual stoic expression, he's got quite the unsavory side hiding underneath, but most opponents are too busy facing off against his boulder-like fists and log-like kicks to do much about his discourteous behavior.",
            link: 'https://youtube.com/embed/RgEmBeNIgCc'
          },
          {
            name: 'Zeta',
            img: '/img/headshots/zeta-headshot.png',
            description: 'This fearless fighter belongs to the Society, an organization which hunts primal beasts. She has formed a contract with the seal weapon known as the Spear of Arvess.\n' +
              '\n' +
              "            She and her partner Vaseraga are charged by the Society with a variety of missions. Though the two often butt heads, each has the other's complete trust. Perhaps it is the contrast between Zeta's upbeat but stubborn personality and Vaseraga's unshakable calm which makes them such good partners.\n" +
              '\n' +
              '            In addition to the fierce mid-range spear attacks which keep her enemies at a distance, Zeta also has a talent for lightning-quick aerial combat.',
            link: 'https://youtube.com/embed/LVkId6XTAdw'
          },
          {
            name: 'Zooey',
            img: '/img/headshots/zooey-headshot.png',
            description: 'At first glance Zooey appears to be an innocent young girl, but her true form is that of the Grand Order, a primal beast tasked with keeping the balance of the world. Abhorring chaos, she takes to the skies and readies herself to fight after sensing three singularities—Gran, Beelzebub, and Djeeta—who will disturb the equilibrium of space and time.\n' +
              '            With swordsmanship beyond mortal capabilities and lightning magic at her command, as well as the aid of her faithful dragons Dyrn and Lyrn, she will ensure balance is upheld.',
            link: 'https://youtube.com/embed/jLZCk6o_PJ0'
          }
        ]
    )
})





module.exports = router;
