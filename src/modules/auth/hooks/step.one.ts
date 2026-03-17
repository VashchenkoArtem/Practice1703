import { StepOneForm } from "../models/types/register.types"

export function useStepOne() {
    async function registerSend(data: StepOneForm) {
        try { 
            const response = await fetch('http://localhost:8000/registration', {
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
    return {registerSend}
    
}