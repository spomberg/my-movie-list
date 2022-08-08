import { useNavigate } from "react-router-dom"
import { useSnackbar } from "notistack"
import { useEffect } from "react";

export default function PageNotFound() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    navigate('/');
    enqueueSnackbar('Page not found!', { variant: 'error' })
  }, [navigate, enqueueSnackbar])
  
    return (
      <div></div>
    )
}
