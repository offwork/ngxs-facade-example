export interface Beers {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: any;
  boil_volume: any;
  method: any;
  ingredients: any;
  food_pairing: Array<any>;
  brewers_tips: string;
  contributed_by: string;
}
