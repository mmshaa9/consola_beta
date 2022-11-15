export type PhotoId = {
  id: string
}

export type ProgramTypeId = {
  name: string
  proto_id: PhotoId
}

export type CityId = {
  id: string
  name: string
}

export type PhotoListItem = {
  photo_id: PhotoId
  type: string
}

export type DateListItem = {
  cost: number
  date_finish: string
  date_start: string
}

export type ProgramListItem = {
  date_list: [DateListItem]
  description: string
  id: string
  name: string
  program_type_id: ProgramTypeId
}

export type TypeId = {
  id?: string
  name: string
}

export type PhotoType = {
  photo_id: PhotoId
  type: string
}

export type SocialNetworkListItem = {
  link: string
  type: string
}
