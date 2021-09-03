import { api } from './api'

export const getProducts = async () => {

    const { data: results } = await api.get('amiibo')

    return results
}