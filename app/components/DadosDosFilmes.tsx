export type Filme = {
  id: string;
  titulo: string;
  cor: string;
  imagem: string;
  ano: string;
  classificacao: string;
  duracao: string;
  relevancia: string;
  descricao: string;
  elenco: string;
  generos: string;
  direcao: string;
};

export type Categoria = {
  id: string;
  titulo: string;
  filmes: Filme[];
};

const detalhesPorFilme: Record<string, Omit<Filme, "id" | "titulo" | "cor" | "imagem">> = {
  "1a": { ano: "2023", classificacao: "14", duracao: "3h", relevancia: "91% relevante", descricao: "A história do cientista J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.", elenco: "Cillian Murphy, Emily Blunt, Robert Downey Jr.", generos: "Drama, História, Suspense", direcao: "Christopher Nolan" },
  "1b": { ano: "2024", classificacao: "12", duracao: "2h 46min", relevancia: "94% relevante", descricao: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.", elenco: "Timothée Chalamet, Zendaya, Rebecca Ferguson", generos: "Ação, Ficção científica, Aventura", direcao: "Denis Villeneuve" },
  "1c": { ano: "2023", classificacao: "12", duracao: "1h 54min", relevancia: "89% relevante", descricao: "Barbie vive seu melhor dia até que uma crise existencial a leva a conhecer o mundo real.", elenco: "Margot Robbie, Ryan Gosling, America Ferrera", generos: "Comédia, Fantasia", direcao: "Greta Gerwig" },
  "1d": { ano: "2023", classificacao: "16", duracao: "2h 21min", relevancia: "86% relevante", descricao: "Uma jovem reanimada por um excêntrico cientista embarca em uma viagem de descoberta e liberdade.", elenco: "Emma Stone, Mark Ruffalo, Willem Dafoe", generos: "Comédia, Drama, Romance", direcao: "Yorgos Lanthimos" },
  "1e": { ano: "2023", classificacao: "18", duracao: "2h 11min", relevancia: "84% relevante", descricao: "Um estudante se encanta pelo mundo de uma família aristocrática durante um verão inesquecível.", elenco: "Barry Keoghan, Jacob Elordi, Rosamund Pike", generos: "Drama, Suspense", direcao: "Emerald Fennell" },
  "2a": { ano: "2023", classificacao: "16", duracao: "2h 49min", relevancia: "93% relevante", descricao: "John Wick descobre um caminho para derrotar a Alta Cúpula, mas precisa enfrentar um novo e poderoso inimigo.", elenco: "Keanu Reeves, Donnie Yen, Bill Skarsgård", generos: "Ação, Crime, Suspense", direcao: "Chad Stahelski" },
  "2b": { ano: "2023", classificacao: "12", duracao: "2h 43min", relevancia: "90% relevante", descricao: "Ethan Hunt e sua equipe correm contra o tempo para impedir que uma arma perigosa caia nas mãos erradas.", elenco: "Tom Cruise, Hayley Atwell, Ving Rhames", generos: "Ação, Espionagem, Aventura", direcao: "Christopher McQuarrie" },
  "2c": { ano: "2022", classificacao: "12", duracao: "2h 11min", relevancia: "92% relevante", descricao: "Depois de décadas, Maverick retorna para treinar uma nova geração de pilotos para uma missão impossível.", elenco: "Tom Cruise, Miles Teller, Jennifer Connelly", generos: "Ação, Drama", direcao: "Joseph Kosinski" },
  "2d": { ano: "2015", classificacao: "14", duracao: "2h", relevancia: "87% relevante", descricao: "Em um futuro devastado, Max se junta a Furiosa em uma fuga alucinante pelo deserto.", elenco: "Tom Hardy, Charlize Theron, Nicholas Hoult", generos: "Ação, Ficção científica", direcao: "George Miller" },
  "3a": { ano: "2007", classificacao: "16", duracao: "1h 53min", relevancia: "82% relevante", descricao: "Dois amigos tentam aproveitar uma festa antes do fim do ensino médio, enfrentando uma noite cheia de confusões.", elenco: "Michael Cera, Jonah Hill, Emma Stone", generos: "Comédia", direcao: "Greg Mottola" },
  "3b": { ano: "2014", classificacao: "14", duracao: "1h 39min", relevancia: "88% relevante", descricao: "Um concierge e seu jovem protegido se envolvem em uma aventura no lendário hotel de uma Europa imaginária.", elenco: "Ralph Fiennes, Tony Revolori, Saoirse Ronan", generos: "Comédia, Aventura", direcao: "Wes Anderson" },
  "3c": { ano: "2019", classificacao: "14", duracao: "2h 10min", relevancia: "90% relevante", descricao: "Um detetive investiga a morte de um escritor rico enquanto todos os membros da família escondem algo.", elenco: "Daniel Craig, Ana de Armas, Chris Evans", generos: "Comédia, Mistério, Crime", direcao: "Rian Johnson" },
  "4a": { ano: "2018", classificacao: "Livre", duracao: "1h 40min", relevancia: "89% relevante", descricao: "O escalador Alex Honnold se prepara para realizar a primeira escalada livre de uma das maiores paredes do mundo.", elenco: "Alex Honnold, Tommy Caldwell", generos: "Documentário, Aventura", direcao: "Elizabeth Chai Vasarhelyi, Jimmy Chin" },
  "4b": { ano: "2020", classificacao: "12", duracao: "1h 34min", relevancia: "85% relevante", descricao: "Especialistas e ex-funcionários de grandes empresas revelam os perigos ocultos das redes sociais.", elenco: "Tristan Harris, Aza Raskin, Jaron Lanier", generos: "Documentário, Tecnologia", direcao: "Jeff Orlowski-Yang" },
  "4c": { ano: "2020", classificacao: "Livre", duracao: "1h 24min", relevancia: "88% relevante", descricao: "Um cineasta cria uma amizade improvável com um polvo que vive em uma floresta de algas na África do Sul.", elenco: "Craig Foster, Tom Foster", generos: "Documentário, Natureza", direcao: "Pippa Ehrlich, James Reed" },
  "5a": { ano: "2018", classificacao: "16", duracao: "2h 7min", relevancia: "86% relevante", descricao: "Após a morte da matriarca, uma família começa a desvendar segredos aterrorizantes sobre sua ancestralidade.", elenco: "Toni Collette, Alex Wolff, Milly Shapiro", generos: "Terror, Drama, Mistério", direcao: "Ari Aster" },
  "5b": { ano: "2019", classificacao: "18", duracao: "2h 27min", relevancia: "83% relevante", descricao: "Um casal viaja para um festival de verão isolado e descobre que seus rituais escondem algo perturbador.", elenco: "Florence Pugh, Jack Reynor, Will Poulter", generos: "Terror, Drama, Suspense", direcao: "Ari Aster" },
  "5c": { ano: "2017", classificacao: "16", duracao: "1h 44min", relevancia: "91% relevante", descricao: "Um jovem visita a família da namorada e percebe que há algo muito mais sinistro por trás daquela recepção.", elenco: "Daniel Kaluuya, Allison Williams, Bradley Whitford", generos: "Terror, Mistério, Suspense", direcao: "Jordan Peele" },
};

export default function DadosDosFilmes(): Categoria[] {
const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg" },
      { id: "1b", titulo: "Duna 2", cor: "#16213e", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrdf5O1qC_1H-8_Maf1tFhlIGilNWhAsY1uRsrzNJKw&s=10"  },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dYF5Ger5WxMEGMpJlgorZRFUL-J253-SMU6VkxQJFw&s=10"  },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeNlDnmQ8dGJRUAWNjpfhEu9UZhv-Drp46puJiDPdBQ&s=10"  },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehFvatWW7PTyOI738MAbSAbBIq_uJTog_iHJdXGGgnQ&s=10"  },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTD8oaJSx7mHmjq_sWFEyzaxzEviN36zkyLizOfszzQ&s=10"  },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGHI5jzqC5rPm6hPf-Dhw4C9xeJn6f94B80saV6URKA&s"  },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", imagem:"https://upload.wikimedia.org/wikipedia/pt/thumb/d/d2/Top_Gun_Maverick.jpg/250px-Top_Gun_Maverick.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"  },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjPbrNHJRpzhRN31Qy-j7h5SJBveN9yqSysqumYgcqA&s"  },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdb7vA74Sh7YAcaWiFs-HfhzIS9x86wxbFeJBVUzKpA&s=10"  },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGKyWR9G3l7O4Z8Us5P2Gqt_sjH7EwzDEXk9ItFw9QQ&s=10"  },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR11SoDajmIc04if_1xtsAxizT3KcyJsEdkGCqVP8jDQ&s=10"  },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYyYYjpVBOVHDsLBh1IZLgGuk3mBCw_NKQrhAyz-81g&s=10"  },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUO1Rwdt2Ho08DlxEYf40EdaIQz4YyPMdlfOkI5o0hg&s=10"  },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82JskoQJhk_OFoixajWiydt04yiN-O8Agpsyxjo-FAQ&s=10"  },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsY44pVWoq_zBbrtTWPqrVZKE9DUsbuib85CoVbqAYg&s=10"  },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pW-De6tsvVTDwSuMazu37L8YlZ50lwm4YiaxclruJw&s=10"  },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcaMyV0lU9qD4q8SoaA9Z2bKw2tKJaejciKkiLlccrKA&s=10"  },
    ],
  }
];
  return categorias.map((categoria) => ({
    ...categoria,
    filmes: categoria.filmes.map((filme) => ({
      ...filme,
      ...detalhesPorFilme[filme.id],
    })),
  }));
}