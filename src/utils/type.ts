interface Company {
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}
export interface Job {
  id: string
  title: string
  type: string
  description: string
  salary: string
  location: string
  company: Company
}
export type JobWithoutId = Omit<Job, 'id'>
