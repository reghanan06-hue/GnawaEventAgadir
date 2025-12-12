import EventInfo from "../models/EventInfo.js";

export default async function seedEvents() {
  await EventInfo.bulkCreate([
    {
      artist_id: 1,
      scene_spectacle: "Place Al Amal - Agadir",
      date_concert: "2025-07-12",
      heure_debut: "21:00",
      heure_fin: "23:30",
    },
    {
      artist_id: 2,
      scene_spectacle: "Théâtre de Verdure - Agadir",
      date_concert: "2025-07-15",
      heure_debut: "20:30",
      heure_fin: "22:00",
    },
    {
      artist_id: 3,
      scene_spectacle: "Corniche d’Agadir - Scène Ouverte",
      date_concert: "2025-08-01",
      heure_debut: "22:00",
      heure_fin: "00:00",
    },
    {
      artist_id: 4,
      scene_spectacle: "Complexe Culturel Abdelkrim El Khattabi - Agadir",
      date_concert: "2025-08-05",
      heure_debut: "19:00",
      heure_fin: "21:00",
    },
    {
      artist_id: 5,
      scene_spectacle: "La Médina Coco Polizzi - Agadir",
      date_concert: "2025-08-10",
      heure_debut: "20:00",
      heure_fin: "22:30",
    },
    {
      artist_id: 6,
      scene_spectacle: "Institut Français d’Agadir - Salle de Spectacle",
      date_concert: "2025-09-01",
      heure_debut: "18:00",
      heure_fin: "20:00",
    },
    {
      artist_id: 7,
      scene_spectacle: "Salle Brahim Radi - Agadir",
      date_concert: "2025-09-10",
      heure_debut: "21:30",
      heure_fin: "23:00",
    },
    {
      artist_id: 8,
      scene_spectacle: "Palais des Congrès - Agadir",
      date_concert: "2025-09-12",
      heure_debut: "20:00",
      heure_fin: "22:00",
    },
    {
      artist_id: 9,
      scene_spectacle: "Marina d’Agadir - Esplanade",
      date_concert: "2025-10-04",
      heure_debut: "19:30",
      heure_fin: "21:00",
    },
    {
      artist_id: 10,
      scene_spectacle: "Théâtre de Verdure - Agadir",
      date_concert: "2025-10-20",
      heure_debut: "22:00",
      heure_fin: "00:30",
    },
  ]);

  console.log(" EventInfo seeded");
}

seedEvents();
