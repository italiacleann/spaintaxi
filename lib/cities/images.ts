export const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1784646744123-94bee07bc09c?w=1600&h=1400&fit=crop&q=80",
    altEn: "Sunlit Spanish city street lined with plane trees and balconied buildings",
    altEs: "Calle española soleada con plátanos de sombra y edificios con balcones",
  },
  {
    src: "https://images.unsplash.com/photo-1785250949631-d7fef6d5f529?w=1600&h=1400&fit=crop&q=80",
    altEn: "Plaza de Pilatos street corner in the historic center of Seville",
    altEs: "Esquina de la Plaza de Pilatos en el centro histórico de Sevilla",
  },
  {
    src: "https://images.unsplash.com/photo-1722612199461-dce07abb7555?w=1600&h=1400&fit=crop&q=80",
    altEn: "Narrow alley with wrought-iron balconies in Barcelona's Gothic Quarter",
    altEs: "Callejón estrecho con balcones de hierro forjado en el Barrio Gótico de Barcelona",
  },
  {
    src: "https://images.unsplash.com/photo-1722612129910-ec3eefabc836?w=1600&h=1400&fit=crop&q=80",
    altEn: "Barcelona Cathedral bell tower rising above a narrow Gothic Quarter street",
    altEs: "Campanario de la Catedral de Barcelona sobre una calle estrecha del Barrio Gótico",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1697730402697-51e3757346d7?w=1600&h=1400&fit=crop&q=80",
    altEn: "Plaza Mayor in Madrid with its equestrian statue and historic façade",
    altEs: "Plaza Mayor de Madrid con su estatua ecuestre y fachada histórica",
  },
  {
    src: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=1600&h=1400&fit=crop&q=80",
    altEn: "Aerial view of Gran Vía and the Metropolis Building in Madrid",
    altEs: "Vista aérea de la Gran Vía y el Edificio Metrópolis en Madrid",
  },
  {
    src: "https://images.unsplash.com/photo-1751834740962-9c41fe457858?w=1600&h=1400&fit=crop&q=80",
    altEn: "The City of Arts and Sciences' futuristic architecture in Valencia",
    altEs: "Arquitectura futurista de la Ciudad de las Artes y las Ciencias en Valencia",
  },
];

export const overviewImages = [
  {
    src: "https://images.unsplash.com/photo-1603087462214-2aadc739429c?w=1200&h=1400&fit=crop&q=80",
    altEn: "Professional chauffeur standing beside a premium black vehicle",
    altEs: "Chófer profesional junto a un vehículo premium de color negro",
  },
  {
    src: "https://images.unsplash.com/photo-1772468237159-674f05233185?w=1200&h=1400&fit=crop&crop=right&q=80",
    altEn: "Driver loading luggage into the car for a city transfer",
    altEs: "Conductor cargando el equipaje en el coche para un traslado en la ciudad",
  },
];

export function pickHeroImage(seed: number) {
  return heroImages[seed % heroImages.length];
}

export function pickOverviewImage(seed: number) {
  return overviewImages[seed % overviewImages.length];
}
