import { useState, useEffect } from "react"
import axiosConn from "../axiosConn";

export default function useApplicationData() {
  const [state, setState] = useState({ lists: [] });

  useEffect(() => {
    Promise.resolve(axiosConn.get("/lists"))
    .then(all => {
      setState(prev => ({ ...prev, lists: all.data }));
    })
  }, []);

  return state;
}