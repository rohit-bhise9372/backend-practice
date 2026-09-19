const express = require("express");
const app = express();

app.use(express.json());

//Albums Array
let albums = [
  {
    id: 1,
    title: "Abbey Road",
    artist: "The Beatles",
    year: 1969,
  },
  {
    id: 2,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
  },
  {
    id: 3,
    title: "Thriller",
    artist: "Michael Jackson",
    year: 1982,
  },
];

// 1. GET "/" Route
app.get("/", (req, res) => {
  res.send("Hello, This is Express Assignment Server.");
});

// 2. POST "/albums" Route
app.post("/albums", (req, res) => {
  const { id, title, artist, year } = req.body;

 
  if (!id || !title || !artist || !year) {
    return res.status(400).json({
      error: "All album data is required.",
    });
  }

  const newAlbum = { id, title, artist, year };
  albums.push(newAlbum);

  res.status(201).json({
    message: "Album added successfully",
    albums,
  });
});

// 3. GET "/albums" Route
app.get("/albums", (req, res) => {
  res.json(albums);
});

// 4. DELETE Album with ID 2
app.delete("/albums/2", (req, res) => {
  const albumIndex = albums.findIndex((album) => album.id === 2);

  if (albumIndex === -1) {
    return res.status(404).json({
      error: "Album not found",
    });
  }

  albums.splice(albumIndex, 1);

  res.json({
    message: "Album deleted successfully",
    albums,
  });
});

// 5. PUT Update Album with ID 1
app.put("/albums/1", (req, res) => {
  const albumIndex = albums.findIndex((album) => album.id === 1);

  if (albumIndex === -1) {
    return res.status(404).json({
      error: "Album does not exist",
    });
  }

  albums[albumIndex] = {
    id: 1,
    title: "Rumours",
    artist: "Fleetwood Mac",
    year: 1977,
  };

  res.json({
    message: "Album updated successfully",
    album: albums[albumIndex],
  });
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
