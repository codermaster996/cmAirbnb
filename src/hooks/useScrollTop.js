import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop() {
  const loaction = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loaction.pathname])
}