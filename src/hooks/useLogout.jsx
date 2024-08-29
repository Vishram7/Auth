import { useNavigate } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {

    const navigate = useNavigate()

    const {dispatch} = useAuthContext()

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        navigate('/login')
    }

    return {logout}
}