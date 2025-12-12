
import Artist from "../models/Artist.js";

export const createArtist = async (req, res) => {
  try {
    const { firstname, lastname,bio, photo_url, status } = req.body;

    const artist = await Artist.create({
      firstname,
      lastname,
      bio,
      photo_url,
      status
    });

    res.status(201).json({
      message: "Artist created successfully",
      artist
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;

    const artist = await Artist.findByPk(id);

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// export const updateArtist = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const artist = await Artist.findByPk(id);
//     if (!artist) return res.status(404).json({ message: "Artist not found" });

//     await artist.update(req.body);

//     res.json({
//       message: "Artist updated successfully",
//       artist
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// export const deleteArtist = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const artist = await Artist.findByPk(id);
//     if (!artist) return res.status(404).json({ message: "Artist not found" });

//     await artist.destroy();

//     res.json({ message: "Artist deleted successfully" });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
