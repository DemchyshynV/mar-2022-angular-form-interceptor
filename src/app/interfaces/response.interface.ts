export interface IResponse<T>{
  total_items:number;
  total_pages:number;
  prev:string;
  next:string;
  data:T[]
}
