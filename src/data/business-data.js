import { BusinessDataType } from "@/data/types/business-data-types";

export const business_data = {
    "business": {
        "name": "Les Toulous'hein",
        "headline": "Toulouse'hein - La meilleure fabrique de burger de Toulouse",
        "website_url": "https://toulouse-hein.fr/",
        "website_thumbnail_url": "https://tb-static.uber.com/prod/image-proc/processed_images/fe52ccaabc3b616079fb5810a83e704e/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg",
        "social_media": [
            {
                "name": "instagram",
                "link": "www.instagram.com"
            },{
                "name": "facebook",
                "link": "www.facebook.com"
            },
        ]
    },
    "website_content": {
        "navigation": {
            "menus": [
                "Accueil",
                "Menu",
                "Horaires",
                "Accès"
            ]
        },
        "sections": {
            "hero": {
                "title": "Le burger Toulousain",
                "subtitle": "10 ans de savoir-faire",
                "image": "/gallery-11-dim-slim.jpg",
                "call_to_action": {
                    "text": "Découvrir le menu",
                    "target_link": "https://www.thong-minh-market.fr/"
                },
                "info": [
                    {
                        "icon": "info-star.svg",
                        "title": "4.0 / 5",
                        "subtitle": "Sur 1300 avis"
                    },
                    {
                        "icon": "/info-calendar.svg",
                        "title": "15 ans",
                        "subtitle": "D'existence"
                    },{
                        "icon": "/info-flag.png",
                        "title": "Viande",
                        "subtitle": "Française"
                    },
                ]
            },
            "story": {
                "title": "Notre histoire",
                "subtitle": "Le premier Toulouse'hein à été ouvert en 2008 sur la place du capitole. À l'époque ce concept novateur a beaucoup fait parlé de lui car l'image du burger été encore associé à un repas de mauvaise qualité. Cette réputation venait des chaines de restaurants américaines venu s'implanter en France sans considération de la complexité de la culture française, et en portant peu attention au rapport que les français ont avec la nourriture. C'est pourquoi nous avons créer ce concept de burger fais maison avec des ingrédients de qualité.",
                "image_src": "/gallery-7.jpeg",
                "milestones": [
                    "2008 - Premier restaurant ouvert au Capitole",
                    "2009 - Recommandé dans plus de 15 articles de presse culinaire",
                    "2010 - Première queue de plus de 50 personnes pour notre restaurant",
                    "2012 - Ouverture du second Toulouse'Hein aux Minimes",
                ],
                "lastParagraph": "Venez goûter le gout de l'authentique"
            },
            "gallery": {
                "title": "Découvrez nos meilleurs plats"
            },
            "menu": {
                "title": "Découvrez notre menu",
                "call_to_action": {
                    "text": "Menu",
                    "target_link": "menu/menu.pdf"
                },
            },
            "menu_text": {
                "title": "Découvrez notre menu",
                "categories": [
                    {
                        "title": "Entrées / Tapas",
                        "dishes": [
                            {
                                "name": "Burger fermier",
                                "price": 18,
                                "description": "Poulet fermier AOC Côtes du rhône. Salade label rouge.",
                                "image": "/menu/dishes/starter.png"
                            },{
                                "name": "Le Blako",
                                "price": 18.90,
                                "description": "Poulet fermier AOC Côtes du rhône. Salade label rouge.",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },
                        ]
                    },{
                        "title": "Burgers",
                        "dishes": [
                            {
                                "name": "Le patte d'oie",
                                "price": 18,
                                "description": "Poulet fermier AOC Côtes du rhône. Salade label rouge.",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },{
                                "name": "Le Blako",
                                "price": 18,
                                "description": "Poulet fermier AOC Côtes du rhône. Salade label rouge.",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },
                        ]
                    },
                    {
                        "title": "Salades",
                        "dishes": [
                            {
                                "name": "Salade césar",
                                "price": 9,
                                "description": "Laitue, pignons de pin, comcombres frais",
                                "image": "/menu/dishes/salad-beef-plate.png"
                            },{
                                "name": "Salade romaine",
                                "price": 11,
                                "description": "Laitue, tomates séchés, fromage de chèvre",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },
                        ]
                    }, {
                        "title": "Hot Dogs",
                        "dishes": [
                            {
                                "name": "Le local",
                                "price": 14,
                                "description": "Véritable saucisse de Toulouse",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },{
                                "name": "Le canadair",
                                "price": 17,
                                "description": "Saussice au canard du gers",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },
                        ]
                    },
                    {
                        "title": "Tacos",
                        "dishes": [
                            {
                                "name": "Tacos roquefort",
                                "price": 11,
                                "description": "Roquefort d'occitanie.",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },{
                                "name": "Vegan tacos",
                                "price": 15.50,
                                "description": "Steak de sauterelles.",
                                "image": "/menu/dishes/burger-poulet-fermier.jpg"
                            },
                        ]
                    },
                ]
            },
            "location": {
                "title": "Venez nous voir !",
                "position": {
                    "lat": 43.60373567060707,
                    "lng": 1.4444728834329283
                },
            },
            "opening_time": {
                "title": "Nous sommes ouvert",
                "opening_days": [
                    {
                        "day": "Lundi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Mardi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Mercredi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Jeudi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Vendredi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Samedi",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                    {
                        "day": "Dimanche",
                        "morning": "9h - 15h",
                        "evening": "18h - 02h"
                    },
                ]
            },
            "useful_info": {
                "title": "Informations utiles"
            },
            "contact": {
                "title": "Contactez nous",
                "phone": "0575846895",
                "email": "touloushein@gmail.com"
            },
            "footer": {
                
            }
        }
    }
}