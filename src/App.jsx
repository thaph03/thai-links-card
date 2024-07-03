function App() {
  return (
    <body className="m-0 p-0 box box-border">
      <main className="flex flex-col justify-center items-center pt-24">
        <div className="card card-compact bg-base-100 w-1/5 shadow-xl ">
          <figure>
            <img src="https://i.imgur.com/iPt63Zb.png" alt="Shoes" />
            <div className="avatar absolute top-20">
              <div className="w-28 ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://pbs.twimg.com/media/GQySi9WbgAA2qwo?format=jpg&name=small" />
              </div>
            </div>
          </figure>

          <div className="card-body flex flex-col justify-center items-center text-slate-50 gap-4 font-mono mt-20">
            <h2 className="card-title text-4xl">Thai Pham</h2>
            <div className="flex flex-row gap-4">
              <span className="badge badge-accent badge-outline">Anime</span>
              <span className="badge badge-accent badge-outline">Gachas</span>
              <span className="badge badge-accent badge-outline">Figures</span>
              <span className="badge badge-accent badge-outline">Badge</span>
              <span className="badge badge-accent badge-outline">Badge</span>
            </div>
            <p>
              If a dog chews shoes whose shoes does he choose?fsdfsf If a dog
              chews shoes whose shoes does he choose?fsdfsf If a dog chews shoes
              whose shoes does he choose?fsdfsf
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
