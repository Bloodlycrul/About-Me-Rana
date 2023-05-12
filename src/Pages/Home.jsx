import style from "../Pages/Home.module.css";
import GauravImage from "../Assets/gaurav.jpeg";

function Home() {
  return (
    <>
      <div className="margin-top">
        <div className={style.componentwidth}>
          <h1>Gaurav Rana</h1>
          <p className={style.para}>
            Hey, I'm Lee. I'm the{" "}
            <span className={style.span}>
              VP of Developer Experience at Vercel{" "}
            </span>{" "}
            where my team helps developers build a faster web.
          </p>
          <div className={style.flex}>
            <img className={style.img} src={GauravImage} alt="" />
            <div>
              <div className={style.flex1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill='#A3A3A3'
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <p className={style.marginleft}>7,604 tweets all time</p>
              </div>
              <div className={style.flex1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#A3A3A3" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_9914_10)"><path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="#A3A3A3"></path></g><defs><clipPath id="clip0_9914_10"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                <p className={style.marginleft}>5,694 stars on this repo</p>
              </div>
              <div className={style.flex1}>
              <svg class="mr-2" width="20" height="20" viewBox="0 0 24 24" fill='#A3A3A3' xmlns="http://www.w3.org/2000/svg"><path d="M2.25 18.0001L9 11.2501L13.306 15.5571C14.5507 13.1029 16.6044 11.1535 19.12 10.0381L21.86 8.81809M21.86 8.81809L15.92 6.53809M21.86 8.81809L19.58 14.7591" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p className={style.marginleft}>1,696,537 blog views all time</p>
              </div>
            </div>
          </div>
          <p className={style.margintop}>
          I'm a Next.js contributor and help lead our open-source communities. I'm passionate about frontend development and have created courses on React, Next.js, and web development. I'm an advisor and investor in early stage startups.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
