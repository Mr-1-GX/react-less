
import { useState } from "react"

export const useLocalStorage = (kay, initialValue) => {
    const [storageValue, setStorageValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }
        try {
            const value = window.localStorage.getItem(kay)
            return value ? JSON.parse(value) : initialValue
        }
        catch (error) {
            console.log('--uselocalStorage--useState--', error)
            return initialValue
        }
    })
    const setValue = (newValue) => {
        try {
            const valueToStorage = newValue instanceof Function ? newValue(storageValue) : newValue
            setStorageValue(valueToStorage)
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(kay, JSON.stringify(valueToStorage))
            }
        }
        catch (error) {
            console.log('--uselocalStorage--setValue--', error)
        }
    }
    return [storageValue, setValue]
}