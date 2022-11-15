import {
  CityId,
  PhotoListItem,
  ProgramListItem,
  SocialNetworkListItem,
  TypeId,
} from '@/helpers/type'

export interface Camp {
  address: string | null
  city_id: CityId
  description: string | null
  id: string | null
  name: string | null
  photo_list: [PhotoListItem]
  program_list: [ProgramListItem]
  slogan: string | null
  social_network_list: [SocialNetworkListItem]
  type_id: TypeId
  logistics: string
  open_date: string
  tour_operator: string
  required_documents: string
  preparing: string
  daily_routine: string
}
