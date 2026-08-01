export const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=1400&fit=crop&q=80",
    altEn: "Commercial aircraft preparing for departure at an airport gate",
    altEs: "Avión comercial preparándose para despegar en la puerta de embarque",
  },
  {
    src: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1600&h=1400&fit=crop&q=80",
    altEn: "Airplane wing above the clouds during a flight to Spain",
    altEs: "Ala de un avión sobre las nubes durante un vuelo a España",
  },
  {
    src: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=1600&h=1400&fit=crop&q=80",
    altEn: "Aircraft taxiing on the runway at a Spanish airport",
    altEs: "Avión rodando por la pista en un aeropuerto español",
  },
  {
    src: "https://images.unsplash.com/photo-1528184039930-bd03972bd974?w=1600&h=1400&fit=crop&q=80",
    altEn: "Airport terminal interior with large glass windows",
    altEs: "Interior de una terminal aeroportuaria con amplios ventanales",
  },
  {
    src: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=1600&h=1400&fit=crop&q=80",
    altEn: "View across an airport apron from the terminal building",
    altEs: "Vista de la plataforma del aeropuerto desde la terminal",
  },
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&h=1400&fit=crop&q=80",
    altEn: "Aircraft descending toward a coastal Spanish airport",
    altEs: "Avión descendiendo hacia un aeropuerto costero español",
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
    altEn: "Driver loading luggage into the car for an airport transfer",
    altEs: "Conductor cargando el equipaje en el coche para un traslado al aeropuerto",
  },
];

export function pickHeroImage(seed: number) {
  return heroImages[seed % heroImages.length];
}

export function pickOverviewImage(seed: number) {
  return overviewImages[seed % overviewImages.length];
}
