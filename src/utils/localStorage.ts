export const loadState = () => {
    try {
        const serializedData = localStorage.getItem('state')
        if (serializedData === null) {

            return undefined
        }
        console.log(JSON.parse(serializedData))
        return JSON.parse(serializedData)
    } catch (error) {
        console.log("Error to load state from LocalStorage")
        return undefined
    }
}
export const saveState = (state: any) => {
    try {
        const serializedData = JSON.stringify(state)
        localStorage.setItem('state', serializedData)
    } catch (error) {
        console.log("error to save state in LocalStorage")
    }
}