const moviesMock = [{
  "id": "7d3b34e3d5a8413e90a36408",
  "title": "Arena",
  "year": 2009,
  "cover": "http://dummyimage.com/205x159.jpg/cc0000/ffffff",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "duration": 1929,
  "contentRating": "NC-17",
  "source": "http://yolasite.com/amet/sapien/dignissim.jpg",
  "tags": "Sci-Fi"
}, {
  "id": "29edd427-df72-41bd-9969-3d5778a993e6",
  "title": "Good Luck Chuck",
  "year": 2009,
  "cover": "http://dummyimage.com/173x171.png/dddddd/000000",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "duration": 1888,
  "contentRating": "G",
  "source": "http://cnet.com/velit/vivamus/vel/nulla/eget/eros.html",
  "tags": "Comedy|Romance"
}, {
  "id": "f1da1454-5248-4b7c-8bc7-af108c777380",
  "title": "Time That Remains, The",
  "year": 2001,
  "cover": "http://dummyimage.com/138x182.bmp/ff4444/ffffff",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "duration": 2055,
  "contentRating": "G",
  "source": "https://php.net/ipsum/dolor/sit/amet/consectetuer/adipiscing.js",
  "tags": "Drama"
}, {
  "id": "f7988938-3e54-44f3-b55a-1dc0c33076aa",
  "title": "Ordinary Decent Criminal",
  "year": 2001,
  "cover": "http://dummyimage.com/193x105.jpg/dddddd/000000",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "duration": 1910,
  "contentRating": "G",
  "source": "https://phoca.cz/lectus/pellentesque/eget/nunc/donec/quis.xml",
  "tags": "Comedy|Crime"
}, {
  "id": "c9dd018a-2419-4f27-9a22-6079e393099d",
  "title": "Curb Dance",
  "year": 2004,
  "cover": "http://dummyimage.com/120x219.png/cc0000/ffffff",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "duration": 1937,
  "contentRating": "NC-17",
  "source": "https://lulu.com/odio/odio/elementum/eu/interdum/eu.png",
  "tags": "(no genres listed)"
}, {
  "id": "22a30f3a-29be-41b7-a66a-f77a6c238481",
  "title": "Christmas in July",
  "year": 1995,
  "cover": "http://dummyimage.com/229x234.bmp/ff4444/ffffff",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "duration": 1993,
  "contentRating": "G",
  "source": "http://nih.gov/duis/mattis.aspx",
  "tags": "Comedy|Romance"
}, {
  "id": "1830fb46-9b0f-4f17-b98b-d3c9cc1d9e38",
  "title": "Adventure in Space and Time, An",
  "year": 1998,
  "cover": "http://dummyimage.com/183x188.jpg/dddddd/000000",
  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "duration": 1989,
  "contentRating": "PG-13",
  "source": "http://delicious.com/convallis/nulla/neque/libero/convallis/eget.js",
  "tags": "Drama"
}, {
  "id": "82f55b57-93f6-4502-a45a-30b4492886f1",
  "title": "Poughkeepsie Tapes, The",
  "year": 2008,
  "cover": "http://dummyimage.com/208x183.png/ff4444/ffffff",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "duration": 1939,
  "contentRating": "PG",
  "source": "https://nih.gov/vestibulum/eget.png",
  "tags": "Horror|Mystery|Thriller"
}, {
  "id": "157a70f7-edee-4689-b2e4-5914957644cb",
  "title": "Laila",
  "year": 1996,
  "cover": "http://dummyimage.com/197x246.png/dddddd/000000",
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "duration": 2048,
  "contentRating": "R",
  "source": "https://google.pl/laoreet.xml",
  "tags": "Drama|Romance"
}, {
  "id": "b9ba9bb3-2b13-4208-be30-324afad84e11",
  "title": "State of Emergency",
  "year": 2013,
  "cover": "http://dummyimage.com/205x126.png/5fa2dd/ffffff",
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "duration": 2069,
  "contentRating": "NC-17",
  "source": "https://squidoo.com/justo/maecenas/rhoncus/aliquam/lacus/morbi/quis.aspx",
  "tags": "Sci-Fi|Thriller"
}];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

function findOneMovieMock(movieId) {
  return moviesMock.find(movie => movie.id === movieId);
}

class MoviesServiceMock {

  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0].id);
  }

  async getMovie({ movieId }) {
    return Promise.resolve(findOneMovieMock(movieId));
  }

  async updateMovie() {
    return Promise.resolve(moviesMock[0]);
  }

  async deleteMovie() {
    return Promise.resolve(moviesMock[0]);
  }

  async patchOneMovie() {
    return Promise.resolve(moviesMock[0]);
  }

}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  findOneMovieMock,
  MoviesServiceMock
};