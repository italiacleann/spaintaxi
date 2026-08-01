export type IslandGroup = "balearic" | "canary" | null;

export interface NearbyPlace {
  nameEn: string;
  nameEs: string;
  driveTime: string;
}

export interface NearbyAirportRef {
  iata: string;
  driveTime: string;
}

export interface AirportRecord {
  iata: string;
  nameEn: string;
  nameEs: string;
  shortNameEn: string;
  shortNameEs: string;
  cityEn: string;
  cityEs: string;
  regionEn: string;
  regionEs: string;
  slugEn: string;
  slugEs: string;
  isMajor: boolean;
  islandGroup: IslandGroup;
  heliport?: boolean;
  hasCruisePort: boolean;
  destinations: NearbyPlace[];
  nearbyCities: NearbyPlace[];
  nearbyAirports: NearbyAirportRef[];
  imageSeed: number;
}
