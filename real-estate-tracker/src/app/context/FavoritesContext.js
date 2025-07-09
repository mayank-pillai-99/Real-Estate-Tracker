'use client'

import { createContext, useState, useEffect, useContext } from 'react'
import { useSession } from 'next-auth/react'

export const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const { data: session } = useSession()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    if (session) {
      // Load favorites from localStorage for the authenticated user
      const storedFavorites = localStorage.getItem(`favorites_${session.user.id}`)
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites))
      }
    }
  }, [session])

  const addFavorite = (zpid) => {
    if (!session) {
      alert('Please sign in to add favorites')
      return
    }
    setFavorites((prev) => {
      const newFavorites = [...new Set([...prev, zpid])] // Avoid duplicates
      localStorage.setItem(`favorites_${session.user.id}`, JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const removeFavorite = (zpid) => {
    if (!session) {
      alert('Please sign in to manage favorites')
      return
    }
    setFavorites((prev) => {
      const newFavorites = prev.filter((id) => id !== zpid)
      localStorage.setItem(`favorites_${session.user.id}`, JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const isFavorite = (zpid) => favorites.includes(zpid)

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)
