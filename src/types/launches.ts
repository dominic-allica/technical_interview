// Swagger docs
// https://docs.spacexdata.com/#5fc4c846-c373-43df-a10a-e9faf80a8b0a

export interface LaunchResponse {
  docs: Launch[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  cores: Cores[];
  payloads: string[];
  launchpad: string;
  success: boolean;
  failures: Failures[];
}

export interface Cores {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

export interface Failures {
  time: number;
  altitude: number;
  reason: string;
}
