import type { ReactNode, MouseEventHandler } from 'react'
import type { Moment } from 'moment'

// Calendar Event Theme Colors
export type CalendarTheme = 'BLUE' | 'GREEN' | 'PURPLE' | 'ORANGE' | 'PINK'

// Calendar Event
export interface CalendarEvent {
  title: string
  theme: CalendarTheme
  startTime: Moment
  endTime: Moment
}

// Transaction
export interface Transaction {
  name: string
  avatar: string
  email: string
  location: string
  amount: number
  date: Moment
}

// Lead
export interface Lead {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

// Redux State
export interface RootState {
  header: HeaderState
  rightDrawer: RightDrawerState
  modal: ModalState
  lead: LeadState
}

export interface HeaderState {
  pageTitle: string
  noOfNotifications: number
  newNotificationMessage: string
  newNotificationStatus: number
}

export interface RightDrawerState {
  header: string
  isOpen: boolean
  bodyType: string
  extraObject: Record<string, unknown>
}

export interface ModalState {
  title: string
  isOpen: boolean
  bodyType: string
  size: string
  extraObject: Record<string, unknown>
}

export interface LeadState {
  isLoading: boolean
  leads: Lead[]
}

// Component Props
export interface TitleCardProps {
  title: string
  children: ReactNode
  topMargin?: string
  TopSideButtons?: ReactNode
}

export interface InputTextProps {
  labelTitle?: string
  labelStyle?: string
  type?: string
  containerStyle?: string
  defaultValue?: string
  placeholder?: string
  updateFormValue?: (value: { updateType: string; value: string }) => void
  updateType?: string
}

export interface SearchBarProps {
  searchText?: string
  styleClass?: string
  placeholderText?: string
  setSearchText?: (value: string) => void
}

export interface SelectBoxProps {
  labelTitle?: string
  labelStyle?: string
  containerStyle?: string
  defaultValue?: string
  placeholder?: string
  options: Record<string, string>
  updateFormValue?: (value: { updateType: string; value: string }) => void
  updateType?: string
}

export interface TextAreaInputProps {
  labelTitle?: string
  labelStyle?: string
  type?: string
  containerStyle?: string
  defaultValue?: string
  placeholder?: string
  updateFormValue?: (value: { updateType: string; value: string }) => void
  updateType?: string
}

export interface ToggleInputProps {
  labelTitle?: string
  labelStyle?: string
  type?: string
  containerStyle?: string
  defaultValue?: boolean
  placeholder?: string
  updateFormValue?: (value: { updateType: string; value: boolean }) => void
  updateType?: string
}

export interface TypographyProps {
  styleClass?: string
  className?: string
  children?: ReactNode
}

// Sidebar Menu Item
export interface SidebarMenuItem {
  path: string
  name: string
  icon: ReactNode
  submenu?: SidebarSubMenuItem[]
}

export interface SidebarSubMenuItem {
  name: string
  path: string
}

export interface SidebarSubmenuProps {
  submenu?: SidebarSubMenuItem[]
  name: string
  icon: ReactNode
  path?: string
}

// Calendar View Props
export interface CalendarViewProps {
  calendarEvents: CalendarEvent[]
  addNewEvent: (date: Moment, theme: CalendarTheme, title: string) => void
  openDayDetail: (date: Moment, events: CalendarEvent[]) => void
}

export interface CalendarFilterProps {
  filteredEvents: CalendarEvent[]
}

// Event handlers
export interface UpdateFormValueParams {
  updateType: string
  value: string | boolean
}

// Confirmation Modal Props
export interface ConfirmationModalBodyProps {
  extraObject: { message: string; type: string; index?: number }
  closeModal: (e: React.MouseEvent) => void
}

// Add Lead Modal Props
export interface AddLeadModalBodyProps {
  closeModal: (e: React.MouseEvent) => void
  extraObject?: Record<string, unknown>
}

// Notification Body Props
export interface NotificationBodyRightDrawerProps {
  closeModal: (e: React.MouseEvent) => void
}

// Modal Types
export type ModalBodyType = 'USER_DETAIL' | 'LEAD_ADD_NEW' | 'CONFIRMATION' | ''

// Right Drawer Types
export type RightDrawerType = 'NOTIFICATION' | 'CALENDAR_EVENTS' | ''

// Confirmation Modal Types
export type ConfirmationModalType = 'LEAD_DELETE' | ''

// Theme Colors Map
export const THEME_COLORS: Record<CalendarTheme, string> = {
  BLUE: 'bg-blue-200 dark:bg-blue-600 dark:text-blue-100',
  GREEN: 'bg-green-200 dark:bg-green-600 dark:text-green-100',
  PURPLE: 'bg-purple-200 dark:bg-purple-600 dark:text-purple-100',
  ORANGE: 'bg-orange-200 dark:bg-orange-600 dark:text-orange-100',
  PINK: 'bg-pink-200 dark:bg-pink-600 dark:text-pink-100',
}
