import type { NearbyPlace } from "@/lib/airports/types";

export interface CityRecord {
  slugEn: string;
  slugEs: string;
  nameEn: string;
  nameEs: string;
  regionEn: string;
  regionEs: string;
  isFeatured: boolean;
  hasCruisePort: boolean;
  mainAirportIata: string;
  airportDriveTime: string;
  destinations: NearbyPlace[];
  imageSeed: number;
  blurbEn?: string;
  blurbEs?: string;
}
