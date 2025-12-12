import sequelize from "../config/db.js";
import Artist from "../models/Artist.js";

async function seed() {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    const artists = [
      {
        firstname: "Hind",
        lastname: "Ennaira",
        bio: "Hind Ennaira is an Essaouira-based gnawa musician and guembri player",
        photo_url: "https://cdn.1beat.org/wp-content/uploads/HindEnnaira.jpeg?strip=all&lossy=1&quality=88&webp=88&avif=88&sharp=1&ssl=1",
        status: "gnawa"
      },
      {
        firstname: "Hamid",
        lastname: "Kasri",
        bio: "One of the most popular modern Gnawa masters blending fusion and tradition.",

        photo_url:"https://fesfestival.com/2015/wp-content/uploads/2015/05/Hamid-Kasri.jpg",
        status: "gnawa"
      },
      {
        firstname: "Hassan",
        lastname: "Hakmoun",
        bio: "Maalem famous internationally for his American-Gnawa fusion.",
        photo_url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/HassanHakmoun.jpg",
        status: "gnawa"
      },
      {
        firstname: "Abdelkebir",
        lastname: "Merchan",
        bio: "Known for his strong spiritual presence during lila ceremonies.",
        photo_url: "https://www.instagram.com/p/DRIv27bE0qM",
        status: "gnawa"
      },
      {
        firstname: "Asma",
        lastname: "El El Hamzaoui",
        bio: "Moroccan singer and guembri player, known as the youngest ambassador of Gnawa music. She leads Banat Timbuktu, continuing the legacy of her father, Rachid Hamzaoui..",
        photo_url: "https://cdn-images.dzcdn.net/images/artist/0a9de350b4835b9da0e3c653007e6e53/1900x1900-000000-80-0-0.jpg",
        status: "gnawa"
      },
      {
        firstname: "Mehdi",
        lastname: "Nassouli",
        bio: "Young singer artist representing modern Gnawa fashion movement,known for mastering the traditional three-stringed Gnawa instrument.",
        photo_url: "https://www.instagram.com/p/C88DHgZo60N/?img_index=1",
        status: "gnawa fashion"
      },
      {
        firstname: "Samir",
        lastname: "LanGus",
        bio: "Gnawa musician blending ancestral African rhythms with spiritual tradition. His work preserves and modernizes the deep heritage of Gnawa culture.",
        photo_url: "https://www.instagram.com/p/C-5uHgzuhuv/?img_index=4",
        status: "gnawa fashion"
      },
      { 
        firstname: "Houssam",
        lastname: "Gania",
        bio: "He is a gnawa ma’alem (master) and musician (guembiri, percussion and vocals) based in Essaouira. He is deeply rooted in the ceremonial music.",
        photo_url: "https://www.instagram.com/p/DR4xnIDjE9N/?img_index=1",
        status: "gnawa"
      },
      { 
        firstname: "Fehd",
        lastname: "Benchemsi",
        bio: "He is a Moroccan actor and singer his work in Gnaoua music, blending traditional Moroccan sounds with contemporary influences. He leads the group Fehd Benchemsi & The Lallas and performs both in Morocco and abroad..",
        photo_url: "https://www.instagram.com/p/CvHkhG8KLOk/?img_index=9",
        status: "gnawa fashion"
      },
     
    ];

    await Artist.bulkCreate(artists);
    console.log("Artists seeded successfully!");

    process.exit(0);

  } catch (error) {
    console.error("Error seeding:", error);
    process.exit(1);
  }
}

seed();
