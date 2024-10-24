import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <body className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center">
      <main
        className="flex flex-col justify-center items-center animate-fade-up space-y-6
"
      >
        <div className="card card-compact bg-base-100 shadow-xl max-w-md mx-8 	border-zinc-700 border-2  ">
          <figure>
            <img src="https://i.imgur.com/iPt63Zb.png" alt="Banner" />
            <div className="avatar absolute top-14 lg:top-20 transform  right-30 lg:w-28 ">
              <div className="w-28 ring-primary ring-offset-base-100 rounded-full ring ring-offset-2 ">
                <img src="https://pbs.twimg.com/profile_images/1812328840775016448/iy6siAgr_400x400.jpg" />
              </div>
            </div>
          </figure>

          <div className="card-body flex flex-col justify-center items-center text-slate-50 gap-5 font-mono mt-20 ">
            <h2 className="card-title text-3xl">SorrowInApril</h2>
            <div className="flex flex-wrap gap-4">
              <span className="badge badge-accent badge-outline">Anime</span>
              <span className="badge badge-accent badge-outline">Games</span>
              <span className="badge badge-accent badge-outline">Coding</span>
            </div>
            <TypeAnimation
              sequence={[
                "Yo! I'm Thai",
                1000,
                "I build stuffs sometimes!",
                1000,
                "Welcome to my links card!",
                1000,
              ]}
              wrapper="span"
              speed={20}
              className="text-sm font-bold"
              repeat={Infinity}
            />
            <div className="card-actions flex flex-col justify-center items-center gap-4">
              <a href="https://github.com/thaph03" target="_blank">
                <button className="btn btn-outline  btn-wide">Github</button>
              </a>
              <a href="https://osu.ppy.sh/users/30229129" target="_blank">
                <button className="btn btn-outline btn-secondary btn-wide">
                  OSU
                </button>
              </a>
              <a
                href="https://myanimelist.net/profile/SorrowInApril"
                target="_blank"
              >
                <button className="btn btn-outline btn-info btn-wide">
                  MyAnimeList
                </button>
              </a>
              <a
                href="https://myfigurecollection.net/profile/thainendolover03"
                target="_blank"
              >
                <button className="btn btn-outline btn-accent btn-wide">
                  MyFigureCollection
                </button>
              </a>
              <a href="https://x.com/sia03xd" target="_blank">
                <button className="btn btn-outline btn-info btn-wide">
                  Twitter
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
