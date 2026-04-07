import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // bisa ganti "smooth" kalau mau animasi
    })
  }, [pathname])

  return null
}