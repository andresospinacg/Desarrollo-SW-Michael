const peliculas = [
  {
    id: 1,
    titulo: "Dune",
    anio: 2021,
    imagen: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    sinopsis: "Paul Atreides, un joven brillante y talentoso, debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo.",
    actores: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"]
  },
  {
    id: 2,
    titulo: "Oppenheimer",
    anio: 2023,
    imagen: "https://www.phenomena-experience.com/galeria/Historico_peliculas/O/oppenheimer-poster.jpg",
    sinopsis: "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.",
    actores: ["Cillian Murphy", "Emily Blunt", "Matt Damon"]
  },
  {
    id: 3,
    titulo: "Barbie",
    anio: 2023,
    imagen: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    sinopsis: "Una muñeca que vive en 'Barbieland' es expulsada al mundo real por no ser lo suficientemente perfecta.",
    actores: ["Margot Robbie", "Ryan Gosling", "America Ferrera"]
  },
  {
    id: 4,
    titulo: "Spider-Man: No Way Home",
    anio: 2021,
    imagen: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    sinopsis: "Peter Parker pide ayuda al Doctor Strange cuando su identidad secreta se revela al mundo.",
    actores: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"]
  },
  {
    id: 5,
    titulo: "El Padrino",
    anio: 1972,
    imagen: "https://image.tmdb.org/t/p/w500/wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg",
    sinopsis: "Don Vito Corleone, el jefe de una familia de la mafia de Nueva York, recibe peticiones el día de la boda de su hija.",
    actores: ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    id: 6,
    titulo: "Pulp Fiction",
    anio: 1994,
    imagen: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    sinopsis: "Las vidas de dos mafiosos, un boxeador, la esposa de un gángster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.",
    actores: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  },
  {
    id: 7,
    titulo: "El Caballero de la Noche",
    anio: 2008,
    imagen: "https://image.tmdb.org/t/p/w500/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg",
    sinopsis: "Batman se enfrenta a su mayor enemigo: el Joker, un criminal que busca sumir Gotham City en el caos completo.",
    actores: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    id: 8,
    titulo: "El Señor de los Anillos: El Retorno del Rey",
    anio: 2003,
    imagen: "https://image.tmdb.org/t/p/w500/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
    sinopsis: "Gandalf y Aragorn lideran el mundo de los hombres contra Sauron y sus fuerzas, mientras Frodo y Sam se aproximan al Monte del Destino con el Anillo Único.",
    actores: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"]
  },
  {
    id: 9,
    titulo: "Titanic",
    anio: 1997,
    imagen: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    sinopsis: "Una aristócrata de diecisiete años se enamora de un artista amable pero pobre a bordo del lujoso y desafortunado R.M.S. Titanic.",
    actores: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
  },
  {
    id: 10,
    titulo: "La La Land",
    anio: 2016,
    imagen: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    sinopsis: "Un pianista de jazz y una aspirante a actriz se enamoran, pero la ambición y el éxito amenazan su relación.",
    actores: ["Ryan Gosling", "Emma Stone", "John Legend"]
  },
  {
    id: 11,
    titulo: "El Rey León",
    anio: 1994,
    imagen: "https://image.tmdb.org/t/p/w500/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
    sinopsis: "Un joven león príncipe huye de su reino solo para aprender el verdadero significado de la responsabilidad y la valentía.",
    actores: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]
  },
  {
    id: 12,
    titulo: "Avatar",
    anio: 2009,
    imagen: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    sinopsis: "Un marine parapléjico enviado a la luna Pandora en una misión única se debate entre seguir sus órdenes y proteger el mundo que siente como su hogar.",
    actores: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
  },
  {
    id: 13,
    titulo: "Matrix",
    anio: 1999,
    imagen: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    sinopsis: "Un hacker informático descubre la verdadera naturaleza de su realidad y su papel en la guerra contra los controladores de esta.",
    actores: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    id: 14,
    titulo: "Parásitos",
    anio: 2019,
    imagen: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    sinopsis: "La vida de una familia pobre cambia drásticamente cuando comienzan a trabajar para una familia adinerada, infiltrándose en sus vidas de maneras inesperadas.",
    actores: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
  },
  {
    id: 15,
    titulo: "El Laberinto del Fauno",
    anio: 2006,
    imagen: "https://i.pinimg.com/736x/b9/10/fd/b910fd984c4a17fe2d781c9dd04cc572.jpg",
    sinopsis: "En la España de la posguerra, la joven Ofelia descubre un misterioso laberinto donde conoce a un fauno que le propone cumplir tres tareas.",
    actores: ["Ivana Baquero", "Sergi López", "Maribel Verdú"]
  },
  {
    id: 16,
    titulo: "Joker",
    anio: 2019,
    imagen: "https://image.tmdb.org/t/p/w500/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
    sinopsis: "Un comediante fracasado se vuelve loco y se convierte en un criminal psicópata en la ciudad de Gotham.",
    actores: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
  },
  {
    id: 17,
    titulo: "Eterno Resplandor de una Mente sin Recuerdos",
    anio: 2004,
    imagen: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    sinopsis: "Cuando su relación se deteriora, una pareja se somete a un procedimiento médico para borrar todos los recuerdos del otro.",
    actores: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"]
  },
  {
    id: 18,
    titulo: "Interestelar",
    anio: 2014,
    imagen: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    sinopsis: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    actores: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  },
  {
    id: 19,
    titulo: "El Silencio de los Corderos",
    anio: 1991,
    imagen: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/1991/2/w1280/8FdQQ3cUCs9goEOr1qUFaHackoJ.jpg",
    sinopsis: "Una joven cadete del FBI busca la ayuda de un asesino caníbal encarcelado para atrapar a otro asesino en serie que despelleja a sus víctimas.",
    actores: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"]
  },
  {
    id: 20,
    titulo: "El Gran Hotel Budapest",
    anio: 2014,
    imagen: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    sinopsis: "Las aventuras de Gustave H, un legendario conserje de un famoso hotel europeo entre guerras, y Zero Moustafa, el botones que se convierte en su amigo más confiable.",
    actores: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"]
  },
  {
    id: 21,
    titulo: "Los Vengadores",
    anio: 2012,
    imagen: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    sinopsis: "Nick Fury reúne a un equipo de superhéroes para salvar al mundo de la destrucción total.",
    actores: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
  },
  {
    id: 22,
    titulo: "Jurassic Park",
    anio: 1993,
    imagen: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    sinopsis: "Un paleontólogo pragmático recorre un parque temático casi completo que alberga dinosaurios creados a partir de ADN prehistórico.",
    actores: ["Sam Neill", "Laura Dern", "Jeff Goldblum"]
  },
  {
    id: 23,
    titulo: "El Club de la Pelea",
    anio: 1999,
    imagen: "https://images.justwatch.com/poster/128723874/s718/el-club-de-la-lucha.jpg",
    sinopsis: "Un insomne oficinista y un fabricante de jabón carismático forman un club de lucha clandestino que evoluciona en algo mucho más.",
    actores: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
  },
  {
    id: 24,
    titulo: "Forrest Gump",
    anio: 1994,
    imagen: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    sinopsis: "Las décadas en la vida de Forrest Gump, un hombre con un coeficiente intelectual bajo pero buenas intenciones.",
    actores: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
  },
  {
    id: 25,
    titulo: "El Resplandor",
    anio: 1980,
    imagen: "https://image.tmdb.org/t/p/w500/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
    sinopsis: "Una familia se aísla en un hotel para el invierno donde una presencia siniestra influye al padre hacia la violencia.",
    actores: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"]
  },
  {
    id: 26,
    titulo: "El Origen",
    anio: 2010,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/ccc13395d64a017b582bb85ad82b36e45166507fb5efbf30de2a74a6cbc32dc0.jpg",
    sinopsis: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, recibe la tarea inversa de plantar una idea en la mente de un CEO.",
    actores: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    id: 27,
    titulo: "El Viaje de Chihiro",
    anio: 2001,
    imagen: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    sinopsis: "Durante la mudanza familiar, una niña de diez años se pierde en un mundo gobernado por dioses, brujas y espíritus, y donde los humanos se transforman en bestias.",
    actores: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"]
  },
  {
    id: 28,
    titulo: "Gladiador",
    anio: 2000,
    imagen: "https://image.tmdb.org/t/p/w500/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
    sinopsis: "Un general romano es traicionado y su familia asesinada. Llega a Roma como gladiador para vengarse.",
    actores: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  {
    id: 29,
    titulo: "Regreso al Futuro",
    anio: 1985,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/092bdc08e733cbcc17860c01a35a0090b4d577a4f82e36e70d9031c716dd2c36.jpg",
    sinopsis: "Un adolescente es enviado accidentalmente treinta años atrás en un DeLorean convertido en máquina del tiempo.",
    actores: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"]
  },
  {
    id: 30,
    titulo: "El Exorcista",
    anio: 1973,
    imagen: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
    sinopsis: "Cuando una niña es poseída por una entidad misteriosa, su madre busca la ayuda de dos sacerdotes para salvarla.",
    actores: ["Ellen Burstyn", "Max von Sydow", "Linda Blair"]
  },
  {
    id: 31,
    titulo: "Todo en Todas Partes al Mismo Tiempo",
    anio: 2022,
    imagen: "https://image.tmdb.org/t/p/w500/qdq40gRS8xKnpFt5V75t6lUHgpx.jpg",
    sinopsis: "Una inmigrante china se ve envuelta en una aventura increíble, donde solo ella puede salvar el mundo explorando otros universos.",
    actores: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"]
  },
  {
    id: 32,
    titulo: "El Lobo de Wall Street",
    anio: 2013,
    imagen: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    sinopsis: "Basada en la historia real de Jordan Belfort, desde su ascenso como un adinerado corredor de bolsa hasta su caída por crímenes corporativos.",
    actores: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"]
  },
  {
    id: 33,
    titulo: "Blade Runner 2049",
    anio: 2017,
    imagen: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    sinopsis: "Un blade runner descubre un secreto que podría provocar el fin de la humanidad. Su hallazgo lo lleva a la búsqueda del blade runner Rick Deckard, desaparecido desde hace 30 años.",
    actores: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"]
  },
  {
    id: 34,
    titulo: "El Pianista",
    anio: 2002,
    imagen: "https://www.aceprensa.com/wp-content/uploads/2002/12/423-0.jpg",
    sinopsis: "Un músico judío polaco lucha por sobrevivir en el gueto de Varsovia durante la Segunda Guerra Mundial.",
    actores: ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"]
  },
  {
    id: 35,
    titulo: "1917",
    anio: 2019,
    imagen: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    sinopsis: "Durante la Primera Guerra Mundial, dos soldados británicos reciben una misión aparentemente imposible: entregar un mensaje que detendrá un ataque mortal contra cientos de soldados.",
    actores: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"]
  },
  {
    id: 36,
    titulo: "Los Siete Samuráis",
    anio: 1954,
    imagen: "https://image.tmdb.org/t/p/w500/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
    sinopsis: "Un pobre pueblo contrata a siete samuráis sin maestro para que los ayuden a defenderse de los bandidos que saquean sus cosechas.",
    actores: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima"]
  },
  {
    id: 37,
    titulo: "Tiburón",
    anio: 1975,
    imagen: "https://image.tmdb.org/t/p/w500/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
    sinopsis: "Cuando un tiburón blanco comienza a atacar a los bañistas en una comunidad costera, un jefe de policía, un oceanógrafo y un pescador se unen para cazarlo.",
    actores: ["Roy Scheider", "Robert Shaw", "Richard Dreyfuss"]
  },
  {
    id: 38,
    titulo: "Taxi Driver",
    anio: 1976,
    imagen: "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    sinopsis: "Un veterano de la guerra de Vietnam trabaja como taxista en Nueva York, donde la decadencia percibida de la sociedad lo empuja a la violencia.",
    actores: ["Robert De Niro", "Jodie Foster", "Cybill Shepherd"]
  },
  {
    id: 39,
    titulo: "El Renacido",
    anio: 2015,
    imagen: "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
    sinopsis: "Un explorador fronterizo en 1823 lucha por sobrevivir después de ser gravemente herido por un oso y abandonado por su equipo de caza.",
    actores: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]
  },
  {
    id: 40,
    titulo: "Mad Max: Furia en el Camino",
    anio: 2015,
    imagen: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    sinopsis: "En un apocalipsis desértico, una mujer rebelde y un vagabundo ayudan a un grupo de prisioneras a escapar de un tirano que controla el agua.",
    actores: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]
  },
  {
    id: 41,
    titulo: "Los Infiltrados",
    anio: 2006,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/354d1f18b12c6da4531eef6b9d9b18e1ecaa47c3f03f9c00204a21da6894e37b.jpg",
    sinopsis: "Un policía encubierto y un topo dentro del departamento de policía intentan identificarse mutuamente mientras se infiltran en una banda irlandesa en Boston.",
    actores: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
  },
  {
    id: 42,
    titulo: "El Gran Lebowski",
    anio: 1998,
    imagen: "hhttps://images.justwatch.com/poster/76802182/s718/el-gran-lebowski.jpg",
    sinopsis: "Un confundido Jeff 'The Dude' Lebowski es confundido con un millonario del mismo nombre y se ve envuelto en una extraña trama de secuestro.",
    actores: ["Jeff Bridges", "John Goodman", "Julianne Moore"]
  },
  {
    id: 43,
    titulo: "Kill Bill: Volumen 1",
    anio: 2003,
    imagen: "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    sinopsis: "Tras despertar de un coma de cuatro años, una antigua asesina se venga de los miembros del equipo que traicionaron a ella y a su jefe.",
    actores: ["Uma Thurman", "Lucy Liu", "Vivica A. Fox"]
  },
  {
    id: 44,
    titulo: "Cisne Negro",
    anio: 2010,
    imagen: "https://images.justwatch.com/poster/204072053/s718/cisne-negro.jpg",
    sinopsis: "Una bailarina comienza a perder la cabeza cuando una compañera rival amenaza con usurpar su lugar como la prima ballerina en una producción de El lago de los cisnes.",
    actores: ["Natalie Portman", "Mila Kunis", "Vincent Cassel"]
  },
  {
    id: 45,
    titulo: "La Forma del Agua",
    anio: 2017,
    imagen: "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
    sinopsis: "En un laboratorio gubernamental de alta seguridad durante la Guerra Fría, una conserje muda se enamora de una criatura anfibia cautiva.",
    actores: ["Sally Hawkins", "Michael Shannon", "Richard Jenkins"]
  },
  {
    id: 46,
    titulo: "El Séptimo Sello",
    anio: 1957,
    imagen: "https://image.tmdb.org/t/p/w500/wcZ21zrOsy0b52AfAF50XpTiv75.jpg",
    sinopsis: "Un caballero medieval juega al ajedrez con la personificación de la Muerte, que le ha llegado a buscar.",
    actores: ["Max von Sydow", "Gunnar Björnstrand", "Bengt Ekerot"]
  },
  {
    id: 47,
    titulo: "Whiplash",
    anio: 2014,
    imagen: "https://image.tmdb.org/t/p/w500/6uSPcdGNA2A6vJmCagXkvnutegs.jpg",
    sinopsis: "Un joven y prometedor baterista se inscribe en un conservatorio donde se encuentra con un instructor que emplea métodos extremos para realizar el potencial de sus estudiantes.",
    actores: ["Miles Teller", "J.K. Simmons", "Paul Reiser"]
  },
  {
    id: 48,
    titulo: "Perdida",
    anio: 2014,
    imagen: "https://www.aceprensa.com/wp-content/uploads/2014/10/210577-0.jpg",
    sinopsis: "Con su esposa desaparecida en su quinto aniversario de bodas, Nick Dunne se convierte en el principal sospechoso.",
    actores: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"]
  },
  {
    id: 49,
    titulo: "Los Siete Magníficos",
    anio: 1960,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/2452204bf39621c433144d16147026ed42d5f910906b59cb530a7db861b71504.jpg",
    sinopsis: "Siete pistoleros son contratados por los habitantes de un pueblo mexicano para protegerlos de un despiadado bandido.",
    actores: ["Yul Brynner", "Steve McQueen", "Charles Bronson"]
  },
  {
    id: 50,
    titulo: "Django Sin Cadenas",
    anio: 2012,
    imagen: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    sinopsis: "Con la ayuda de un cazador de recompensas alemán, un esclavo liberado se propone rescatar a su esposa de un brutal dueño de una plantación de Mississippi.",
    actores: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"]
  }
];
  
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const pelicula = peliculas.find(p => p.id === id);
  const contenedor = document.getElementById("detalle-pelicula");
  
  if (pelicula) {
    contenedor.innerHTML = `
      <div class="col-12 col-md-4">
        <img src="${pelicula.imagen}" class="img-fluid" alt="${pelicula.titulo}" />
      </div>
      <div class="col-12 col-md-8">
        <h2>${pelicula.titulo} (${pelicula.anio})</h2>
        <p><strong>Actores:</strong> ${pelicula.actores.join(", ")}</p>
        <p>${pelicula.sinopsis}</p>
      </div>
    `;
  }
  
  
  const comentariosKey = `comentarios_pelicula_${id}`;
  const listaComentarios = document.getElementById("lista-comentarios");
  const formComentario = document.getElementById("form-comentario");
  const inputUsuario = document.getElementById("usuario");
  const inputComentario = document.getElementById("comentario");
  
  function mostrarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem(comentariosKey)) || [];
    listaComentarios.innerHTML = "";
    comentarios.forEach(c => {
      listaComentarios.innerHTML += `
        <div class="mb-2 border rounded p-2">
          <strong>${c.usuario}</strong><br />
          <p class="mb-0">${c.texto}</p>
        </div>
      `;
    });
  }
  
  formComentario.addEventListener("submit", e => {
    e.preventDefault();
    const nuevoComentario = {
      usuario: inputUsuario.value.trim(),
      texto: inputComentario.value.trim()
    };
    if (!nuevoComentario.usuario || !nuevoComentario.texto) return;
  
    const comentarios = JSON.parse(localStorage.getItem(comentariosKey)) || [];
    comentarios.push(nuevoComentario);
    localStorage.setItem(comentariosKey, JSON.stringify(comentarios));
  
    formComentario.reset();
    mostrarComentarios();
  });
  
  mostrarComentarios();
  