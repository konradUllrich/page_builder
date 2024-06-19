

import { getPage } from "../data/actions";
import { notFound } from "next/navigation";

import type { PageBuilderData } from "../pageBuilder/config";
import RenderComponents from "../pageBuilder/config/RenderComponents";



export default async function Page() {

  const result = await getPage('home')

  
  if (!result?.page) {
    notFound()
  }

  return <div>

   <Render data={result.page}/>

  </div>

}


const Render = ({data}:{data:PageBuilderData})=>{

//console.log(data)



 return <div>

  {
    data.content.map((block)=>{
       //@ts-ignore
     const Component =  RenderComponents[block.type]

     if(!Component) return  <div> Component missing for Type {block.type}</div>

      return <Component {...block.props}/>
    })

  }
 </div>
  
}