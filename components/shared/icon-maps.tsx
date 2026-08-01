import {
  BadgeEuroIcon,
  BriefcaseIcon,
  BuildingIcon,
  CalendarCheckIcon,
  CarFrontIcon,
  ClockIcon,
  FlagIcon,
  HandshakeIcon,
  HeadsetIcon,
  LockIcon,
  MailCheckIcon,
  MapPinIcon,
  MapPinnedIcon,
  PlaneIcon,
  RouteIcon,
  ShieldCheckIcon,
  ShipIcon,
  SmileIcon,
  StarIcon,
  TimerIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";

import type {
  ServiceIconKey,
  StepIconKey,
  TrustIconKey,
  WhyIconKey,
} from "@/lib/i18n/types";
import type {
  AboutServiceIconKey,
  AboutStepIconKey,
  AboutTrustIconKey,
  AboutWhyIconKey,
} from "@/lib/i18n/about-types";
import type {
  ServiceIconKey as ServicePageIconKey,
  ServiceStepIconKey,
} from "@/lib/i18n/service-types";

export const trustIcons: Record<TrustIconKey, typeof ClockIcon> = {
  clock: ClockIcon,
  "badge-euro": BadgeEuroIcon,
  plane: PlaneIcon,
  "user-check": UserCheckIcon,
};

export const serviceIcons: Record<ServiceIconKey, typeof PlaneIcon> = {
  plane: PlaneIcon,
  "map-pinned": MapPinnedIcon,
  timer: TimerIcon,
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  ship: ShipIcon,
};

export const whyIcons: Record<WhyIconKey, typeof BadgeEuroIcon> = {
  "badge-euro": BadgeEuroIcon,
  "shield-check": ShieldCheckIcon,
  plane: PlaneIcon,
  clock: ClockIcon,
  "car-front": CarFrontIcon,
  headset: HeadsetIcon,
};

export const stepIcons: Record<StepIconKey, typeof CalendarCheckIcon> = {
  "calendar-check": CalendarCheckIcon,
  "mail-check": MailCheckIcon,
  handshake: HandshakeIcon,
  "car-front": CarFrontIcon,
};

export const aboutWhyIcons: Record<AboutWhyIconKey, typeof UserCheckIcon> = {
  "user-check": UserCheckIcon,
  "shield-check": ShieldCheckIcon,
  plane: PlaneIcon,
  handshake: HandshakeIcon,
  "badge-euro": BadgeEuroIcon,
  "car-front": CarFrontIcon,
  "map-pin": MapPinIcon,
  headset: HeadsetIcon,
};

export const aboutServiceIcons: Record<AboutServiceIconKey, typeof PlaneIcon> = {
  plane: PlaneIcon,
  building: BuildingIcon,
  "map-pinned": MapPinnedIcon,
  ship: ShipIcon,
  briefcase: BriefcaseIcon,
  "car-front": CarFrontIcon,
  timer: TimerIcon,
  route: RouteIcon,
  flag: FlagIcon,
  users: UsersIcon,
};

export const aboutTrustIcons: Record<AboutTrustIconKey, typeof StarIcon> = {
  star: StarIcon,
  smile: SmileIcon,
  lock: LockIcon,
  "badge-euro": BadgeEuroIcon,
  headset: HeadsetIcon,
};

export const aboutStepIcons: Record<AboutStepIconKey, typeof CalendarCheckIcon> = stepIcons;

export const servicePageIcons: Record<ServicePageIconKey, typeof PlaneIcon> = {
  "badge-euro": BadgeEuroIcon,
  "user-check": UserCheckIcon,
  plane: PlaneIcon,
  handshake: HandshakeIcon,
  "car-front": CarFrontIcon,
  headset: HeadsetIcon,
  clock: ClockIcon,
  "map-pin": MapPinIcon,
  "shield-check": ShieldCheckIcon,
  star: StarIcon,
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  timer: TimerIcon,
  ship: ShipIcon,
  route: RouteIcon,
  flag: FlagIcon,
  building: BuildingIcon,
};

export const servicePageStepIcons: Record<ServiceStepIconKey, typeof CalendarCheckIcon> = stepIcons;
