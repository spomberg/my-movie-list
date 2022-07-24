import { useState, useEffect } from "react"
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({ lists: [] });

  useEffect(() => {
    Promise.resolve(axios.get("/lists"))
    .then(all => {
      setState(prev => ({ ...prev, lists: all[0].data }));
    })
  }, []);

  return state;
}