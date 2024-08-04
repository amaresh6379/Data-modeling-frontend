import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Observable } from "rxjs"

export class AuthInterceptor implements HttpInterceptor{
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const userToken  = localStorage.getItem("token");
    console.log("userToken",userToken);
    const modifiedReq  = req.clone({
      headers: req.headers.set('Authorization',`${userToken}`)
    });
    return next.handle(modifiedReq);
  }
}
