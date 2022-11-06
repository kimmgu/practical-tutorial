// Address
export type Address = {
  zip: string
  address1: string
  address2: string | ''
}

export type DaumAddress = {
  address: string
  autoJibunAddress: string
  roadAddress: string
  sigunguCode: string
}

// Common
export type AnyObject = {
  [key: string]: any
}

export type ValidateRule = {
  rule: RegExp
  match: boolean
  message: string
}

// User
export type User = {
  id: string
  password: string
  email: string
  name: string
  address?: Address
}
