import { FC} from 'react'


export const ImageText:FC<any> = ({id, title, desc, img,  btn}) => {
    return(
        
        <section id={id} className={`bg-green flex justify-center  text-zinc-900 h-fit items-center relative lg:h-screen overflow-hidden`}>            
            <div className={`h-[90%] flex items-start lg:items-center z-10 flex-col lg:flex-row  w-full gap-[5ch] lg:gap-[0ch] xl:gap-[5ch] py-[15vh] lg:pt-0`}>
                
                <div className={`flex flex-col gap-4 lg:w-10/12 rounded-tl-3xl justify-center `}>
                    <h2 className={`text-4xl lg:text-5xl font-bold text-primary`}>{title}</h2>
                    
                    <div className={`tracking-wide leading-relaxed gap-2 flex flex-col`}>
                    {desc.map((d:any, i:number) => (
                        <p key={i}>{d}</p>
                    ))}
                    </div>
                
                    {btn}
                </div>
                
                <div className={'w-full lg:w-7/12 flex lg:items-center justify-center relative '}>

                    <img
                        src={img} 
                        alt={'Image to describe ' + title} 
                        className={` w-full h-full -translate-x-[10px]  scale-90 -translate-y-[10px] rounded-b-xl`}                            
                    />
                </div>
                
           
            </div>
        </section>
    )
}