import requery from "../requery";
import { Login } from "@/ts";
export const querLogin = (data: Login) => requery.post('/user/m/login', data)
export const queryBaner = (data: any) => requery.get('/banner/list', data)
export const querygetList= (data:any)=>requery.post('/shop/goods/list/v2',data)
export const querygetcar = (data: any) => requery.post('/shop/goods/category/all', data)
export const querygetcarlist = (data: any) => requery.post('/shop/goods/list/v2', data)
export const querygetdetile = (data: any) => requery.post('shop/goods/reputation/v2', data)
export const querygetAdd = (data:any)=>requery.post('shopping-cart/add',data)