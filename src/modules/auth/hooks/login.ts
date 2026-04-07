import type{ LoginForm } from "../models/types/login.types";
export function useLogin (){
    async function loginSend(data: LoginForm) {
        try { 
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            })
    
            const loginData = await response.json()
    
            if (response.status === 404 || response.status === 422) {
                return loginData.message
            }
            return loginData
        } catch {
            return 'Network error. Try again, please.'
        }
    }
    return {loginSend}

}