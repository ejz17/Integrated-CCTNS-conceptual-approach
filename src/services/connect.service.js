import  http from '../http-common';
class DataServicce{
    getAll(){
        return http.get("/cases");
    }
    get(login){
        return http.get("/cases",login{userid,password});
    }
    create(firdetails){
        return http.post("/cases",firdetails{id,firnumber,policest,year});
    }
    update(firdetails){
            return http.post("/cases",firdetails{id,firnumber,policest,year});
        }


   create(court){
                return http.post("/cases",court{id,state,district,complex});
            }
        update(firdetails){
                    return http.post("/cases",court{id,firnumber,policest,year});
                }
            create(keys){
                        return http.post("/cases",keys{id,key,randomkey});
                    }
       

       get(keys){
    
             return http.post("/cases",keys{id,key,randomkey});
               

             }
}
   findone(){
    return http.post("/cases",firnumber,key});

              }
         get(sidecourt){
   return http.post("/cases",keys{firnumber,policest,year,file,pdf});
   }
   