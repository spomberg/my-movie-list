import { useState, useEffect } from "react"
import axiosConn from "../axiosConn";

export default function useListData(params) {
  const [state, setState] = useState({ list: {} });

  useEffect(() => {
    Promise.resolve(axiosConn.get(`/lists/${params}`))
    .then(all => {
      setState(prev => ({ ...prev, list: all.data }));
    })
  }, []);

  return state;
}