export type data = {
  id: string
  value: string
}
export type itemShowContent = {
  item: data
}

export type propShowItem = {
  item: data
  handleDelete: (id: string) => void
}

export type propInputItem = {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
  handleAdd: () => void
  isPopup: boolean
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>
}
