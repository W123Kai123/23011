import axios from 'axios'
class Requery {
    baseURL: string
    intence: any
    constructor(baseURL: string) {
        this.baseURL = baseURL
        this.intence = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        this.intence.interceptors.request.use((config: any) => {
            
            return config
        })
        this.intence.interceptors.response.use((res: any) => {
            return res
        })
    }
    get(url: string, data?: any): any {
        return this.intence.get(url, { params: data })
    }
    post(url: string, data?: any): any {
        return this.intence.post(url, data)
    }
    put(url: string, data?: any): any {
        return this.intence.put(url, data)
    }
    delete(url: string, data?: any): any {
        return this.intence.delete(url, data)
    }
}
export default new Requery('https://api.it120.cc/xiaochengxu/')