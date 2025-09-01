export enum IconSet {
  MaterialIcons = 'MaterialIcons',
  MaterialCommunityIcons = 'MaterialCommunityIcons',
  Ionicons = 'Ionicons',
  FontAwesome = 'FontAwesome',
  FontAwesome5 = 'FontAwesome5',
  AntDesign = 'AntDesign',
  Entypo = 'Entypo',
  EvilIcons = 'EvilIcons',
  Foundation = 'Foundation',
  Octicons = 'Octicons',
  SimpleLineIcons = 'SimpleLineIcons',
  Zocial = 'Zocial',
  Feather = 'Feather',
}

export interface Pagination {
  limit: number;
  page: number;
  pages: number;
  total: number;
}
export interface BaseApiResponse<T = any> {
  success: boolean;
  message: string;
  pagination?: Pagination;
  data: T;
}

export interface UserDetails {
  effectivePermissions: string[];
  email: string;
  id: string;
  isActive: boolean;
  lastLoginAt: string;
  organizationId: {
    _id: string;
    name: string;
  };
  role: string;
  templeFeatures: string[];
  templeId: {
    _id: string;
    name: string;
    templeFeatures: string[];
    isActive: boolean;
  };
  username: string;
}

export interface SignInResponseData {
  token: string;
  user: UserDetails;
}

export interface SignInResponse extends BaseApiResponse<SignInResponseData> {}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface VolunteerListResponse {
  data: VolunteerListItem[];
  message: string;
  success: boolean;
  pagination: Pagination;
}

export interface VolunteerDetailsResponse {
  data: VolunteerListItem;
  message: string;
  success: boolean;
}

export interface AgencyListResponse {
  data: AgencyListItem[];
  message: string;
  success: boolean;
  pagination: Pagination;
}

export interface FileData {
  url: string;
  key: string;
}

export interface VolunteerListItem {
  _id: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  aadharNumber: string;
  aadharCard: FileData;
  photo: FileData;
  assignmentStatus: string;
  birthDate: string;
  createdAt: string;
  event: string;
  gender: string;
  idStatus: 'Printed' | 'Not Printed' | 'Returned';
  isActive: boolean;
  notificationSent: boolean;
  registrationStatus: string;
  serviceType: string;
  temple: string;
  updatedAt: string;
  volunteerType: string;
  __v: number;
}

export interface AgencyListItem {
  address: string;
  agencyName: string;
  agencyStatus: string;
  assignCount: number;
  city: string;
  createdAt: string;
  description: string;
  email: string;
  femaleAssignCount: number;
  femaleVolunteers: number;
  isActive: boolean;
  maleAssignCount: number;
  maleVolunteers: number;
  password: string;
  personName: string;
  phoneNumber: string;
  registrationNumber: string;
  registrationProof: {
    url: string;
    key: string;
  };
  role: string;
  totalVolunteers: number;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface LocationResponseData {
  locations: LocationListItem[];
}

export interface LocationListItem {
  _id: string;
  locationName: string;
  nearbyArea: string;
  serviceIds: ServiceListItem[];
  areaType: string;
  shiftTypes: string[];
  templeId:
    | string
    | {
        _id: string;
        name: string;
      };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ServiceListItem {
  _id: string;
  name: string;
  description: string;
}

export interface ServiceAndShiftListItem {
  _id: string;
  name: string;
  serviceType: string;
  templeId: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface LocationServiceResponseData {
  success: boolean;
  message: string;
  location: LocationListItem;
  totalServices: number;
  data: ServiceAndShiftListItem[];
  availableShifts: string[];
}

export interface AssignServiceRequest {
  locationId: string;
  serviceType: string;
  shiftType: string;
  volunteerIds?: string[];
  volunteerId?: string[];
  volunteerServiceId: string;
}

export interface AssignServiceResponse {
  success: boolean;
  message: string;
  data?: {
    assignedBy: string;
    createdAt: string;
    isActive: boolean;
    locationId: {
      _id: string;
      locationName: string;
      nearbyArea: string;
    };
    serviceType: string;
    shiftType: string;
    templeId: string;
    updatedAt: string;
    volunteerId: { _id: string; fullName: string; phoneNumber: string }[];
    volunteerServiceId: {
      _id: string;
      name: string;
      serviceType: string;
    };
  };
  error?: string;
}
