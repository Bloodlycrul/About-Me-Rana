import style from "./About.module.css"

function About(){
    return (
        <>
        <div className="margin-top">
        <h1 className={style.heading}>About Me</h1>
        <p className={style.para}>Hey, I'm Gaurav. Most folks know me as Gaurav Rana</p>
        <p className={style.para}>I'm currently the VP of Developer Experience at Vercel, where I lead our Developer Relations and Documentation teams. I focus on educating and growing the Vercel and Next.js communities.</p>
        
        <hr className={style.hr1} />
        </div>
        </>

    )
}

export default About;