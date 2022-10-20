import { ProductModule } from '../../interfaces/prodect.inteface';
import { TopPageModule, TopLevelCategory } from '../../interfaces/toppage.inteface';


export interface TopPageProps{
    firstCategory:TopLevelCategory
    page:TopPageModule,
    products:ProductModule[]
 }
