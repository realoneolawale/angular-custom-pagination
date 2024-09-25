import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
// featured module - this is added to the root module 
@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule { }
