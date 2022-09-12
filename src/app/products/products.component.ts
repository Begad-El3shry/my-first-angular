import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'first-app';

  movies = [
    {
      adult: false,
      backdrop_path: '/2RSirqZG949GuRwN38MYCIGG4Od.jpg',
      genre_ids: [53],
      id: 985939,
      original_language: 'en',
      original_title: 'Fall',
      overview:
        'For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.',
      popularity: 9423.858,
      poster_path: '/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg',
      release_date: '2022-08-11',
      title: 'Fall',
      video: false,
      vote_average: 7.4,
      vote_count: 402,
      isVisible:false
    },
    {
      adult: false,
      backdrop_path: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
      genre_ids: [28, 12, 14],
      id: 616037,
      original_language: 'en',
      original_title: 'Thor: Love and Thunder',
      overview:
        'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      popularity: 5906.414,
      poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      release_date: '2022-07-06',
      title: 'Thor: Love and Thunder',
      video: false,
      vote_average: 6.8,
      vote_count: 3002,
      isVisible:false
    },
    {
      adult: false,
      backdrop_path: '/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg',
      genre_ids: [28, 18, 878],
      id: 629176,
      original_language: 'en',
      original_title: 'Samaritan',
      overview:
        'Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.',
      popularity: 5798.563,
      poster_path: '/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg',
      release_date: '2022-08-25',
      title: 'Samaritan',
      video: false,
      vote_average: 7,
      vote_count: 894,
      isVisible:false
    },
    {
      adult: false,
      backdrop_path: '/yaze6df9AMIA9oeDEbIZ4zOTRCJ.jpg',
      genre_ids: [28, 12, 14],
      id: 960700,
      original_language: 'ja',
      original_title: '鋼の錬金術師 完結編 復讐者スカー',
      overview:
        'The Elric brothers meet their toughest opponent yet — a lone serial killer with a large scar on his forehead.',
      popularity: 4000.89,
      poster_path: '/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg',
      release_date: '2022-05-20',
      title: 'Fullmetal Alchemist: The Revenge of Scar',
      video: false,
      vote_average: 7,
      vote_count: 72,
      isVisible:false
    },
    {
      adult: false,
      backdrop_path: '/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg',
      genre_ids: [16, 28, 10751, 878, 35],
      id: 539681,
      original_language: 'en',
      original_title: 'DC League of Super-Pets',
      overview:
        'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
      popularity: 3493.847,
      poster_path: '/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
      release_date: '2022-07-27',
      title: 'DC League of Super-Pets',
      video: false,
      vote_average: 7.6,
      vote_count: 487,
      isVisible:false
    },
    {
      adult: false,
      backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
      genre_ids: [53, 28, 878],
      id: 766507,
      original_language: 'en',
      original_title: 'Prey',
      overview:
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
      popularity: 3659.907,
      poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
      release_date: '2022-08-02',
      title: 'Prey',
      video: false,
      vote_average: 8,
      vote_count: 3743,
      isVisible:false
    },
  ];
  toggleDetails(id:number){
    this.movies.filter(function(movie){
      if (movie.id === id) {
        movie.isVisible =! movie.isVisible ;
      }
    })
  }

}
