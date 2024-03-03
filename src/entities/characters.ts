import { NullableType } from "./types";

export interface CharacterAttributes {
    alias_names: string[];
    animagus: NullableType<string>;
    blood_status: NullableType<string>;
    boggart: NullableType<string>;
    born: NullableType<string>;
    died: NullableType<string>;
    eye_color: NullableType<string>;
    family_members: string[];
    gender: NullableType<string>;
    hair_color: NullableType<string>;
    height: NullableType<string>;
    house: NullableType<string>;
    image: NullableType<string>;
    jobs: string[];
    marital_status: NullableType<string>;
    name: NullableType<string>;
    nationality: NullableType<string>;
    patronus: NullableType<string>;
    romances: string[];
    skin_color: NullableType<string>;
    slug: NullableType<string>;
    species: NullableType<string>;
    titles: string[];
    wands: string[];
    weight: NullableType<string>;
    wiki: NullableType<string>;
}