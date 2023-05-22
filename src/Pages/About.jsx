import style from "./About.module.css";
import Button from "../Components/Button";

function About() {
  const twitterCode = `
    <svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#a)">
        <path d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z" fill="currentColor"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z"></path>
        </clipPath>
      </defs>
    </svg>
  `;

  const youtube = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 461.001 461.001" class="w-5 h-5" fill="currentColor"><path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"></path></svg>`
  const github = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_9914_10)"><path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_9914_10"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>`;


  return (
    <>
      <div className="margin-top">
        <h1 className={style.heading}>About Me</h1>
        <p className={style.para}>
          Hey, I'm Gaurav. Most folks know me as Gaurav Rana
        </p>
        <p className={style.para}>
          I'm currently the VP of Developer Experience at Vercel, where I lead
          our Developer Relations and Documentation teams. I focus on educating
          and growing the Vercel and Next.js communities.
        </p>

        <hr className={style.hr1} />

        <p className={style.para}>
          I'm passionate about many creative pursuits, including music,
          photography, videography, and of course, coding. This combination of
          interests is what ultimately led me to my current role in building
          developer communities.
        </p>

        <p className={style.para}>
          I love building for the web. From something as simple as a single HTML
          file – all the way to large Next.js applications. The web is
          incredible. Anyone can become a developer, writer, or creator – and no
          one has to ask for permission. You can just build.
        </p>

        <p className={style.para}>
          Outside of Vercel, I angel invest in developer tools companies and
          advise early-stage startups. I also do Developer Relations consulting
          work, helping companies take their DevRel function from 0 to 1, or
          provide guidance on growing communities, content creation, and
          developer marketing.
        </p>

        <div className={style.display}>
          <Button svg={twitterCode} name="Twitter" />
         <a className = 'cursor' href="https://github.com/Bloodlycrul" ><Button className={style.cursor} svg={github} name="Github" /></a> 
          <Button svg={youtube} name="Youtube" />
        </div>
      </div>
    </>
  );
}

export default About;
