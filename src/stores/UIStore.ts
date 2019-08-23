import { createContext } from "react"
import { observable } from "mobx"

class UIStore {
  @observable testText = "I am a baloon"
  @observable mobileMenu = {}
}

export const UIStoreContext = createContext(new UIStore())
