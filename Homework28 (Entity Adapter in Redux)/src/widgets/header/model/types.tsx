export interface MenuOption {
    id: string
    title: string
    to: string
}

export interface MenuSection {
    title: string
    menuOptions: MenuOption[]
}
