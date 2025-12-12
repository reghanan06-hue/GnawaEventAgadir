import sequelize from "../config/db.js";
import Artist from "../models/Artist.js";

async function seed() {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    const artists = [
      {
        firstname: "Mahmoud",
        lastname: "Guinia",
        bio: "Legendary Maalem from Essaouira known for his deep Gnawa tradition.",
        photo_url: "https://example.com/photos/mahmoud-guinia.jpg",
        status: "gnawa"
      },
      {
        firstname: "Hamid",
        lastname: "Kasri",
        bio: "One of the most popular modern Gnawa masters blending fusion and tradition.",
        photo_url: "https://example.com/photos/hamid-kasri.jpg",
        status: "gnawa"
      },
      {
        firstname: "Hassan",
        lastname: "Hakmoun",
        bio: "Maalem famous internationally for his American-Gnawa fusion.",
        photo_url: "https://example.com/photos/hassan-hakmoun.jpg",
        status: "gnawa"
      },
      {
        firstname: "Abdelkebir",
        lastname: "Merchan",
        bio: "Known for his strong spiritual presence during lila ceremonies.",
        photo_url: "https://example.com/photos/abdelkebir-merchan.jpg",
        status: "gnawa"
      },
      {
        firstname: "Brahim",
        lastname: "El Makhfi",
        bio: "Gnawa musician from Marrakech with a unique qraqeb style.",
        photo_url: "https://example.com/photos/brahim-makhfi.jpg",
        status: "gnawa"
      },
      {
        firstname: "Driss",
        lastname: "Benjelloun",
        bio: "Young rising artist representing modern Gnawa fashion movement.",
        photo_url: "https://example.com/photos/driss-benjelloun.jpg",
        status: "gnawa fashion"
      },
      {
        firstname: "Yassine",
        lastname: "Touzani",
        bio: "Combines traditional guembri with electronic music.",
        photo_url: "https://example.com/photos/yassine-touzani.jpg",
        status: "gnawa fashion"
      },
      {
        firstname: "Saad",
        lastname: "Ait Lahcen",
        bio: "Classic Gnawa player known for his mastery of rhythms.",
        photo_url: "https://example.com/photos/saad-ait-lahcen.jpg",
        status: "gnawa"
      },
      {
        firstname: "Othman",
        lastname: "Tazi",
        bio: "Performer mixing African and Moroccan Gnawa elements.",
        photo_url: "https://example.com/photos/othman-tazi.jpg",
        status: "gnawa fashion"
      },
      {
        firstname: "Redouane",
        lastname: "Amrani",
        bio: "Traditionalist artist keeping old Essaouira style alive.",
        photo_url: "https://example.com/photos/redouane-amrani.jpg",
        status: "gnawa"
      },
      {
        firstname: "Ismail",
        lastname: "Berrada",
        bio: "Known for strong vocals during 'derdeba' ceremonies.",
        photo_url: "https://example.com/photos/ismail-berrada.jpg",
        status: "gnawa"
      },
      {
        firstname: "Imad",
        lastname: "Fellah",
        bio: "Fusion artist mixing Gnawa with jazz and world music.",
        photo_url: "https://example.com/photos/imad-fellah.jpg",
        status: "gnawa fashion"
      },
      {
        firstname: "Khalid",
        lastname: "Moujahid",
        bio: "Expert qraqeb player famous in Agadir’s festival scene.",
        photo_url: "https://example.com/photos/khalid-moujahid.jpg",
        status: "gnawa"
      },
      {
        firstname: "Abdelali",
        lastname: "El Ghazi",
        bio: "Traditional guembri master performing in Moroccan lilas.",
        photo_url: "https://example.com/photos/abdelali-elghazi.jpg",
        status: "gnawa"
      },
      {
        firstname: "Youssef",
        lastname: "Fassi",
        bio: "Modern Gnawa performer focusing on artistic fashion visuals.",
        photo_url: "https://example.com/photos/youssef-fassi.jpg",
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
