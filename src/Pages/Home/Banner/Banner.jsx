



const Banner = () => {
    return (
        <div>
        
        <div className="mt-2 h-[450px] bg-no-repeat bg-[url('https://i.ibb.co/Pt1pVn4/Rectangle-4281.png')] bg-center bg-cover mr-6">
       
       <div className="absolute top-[120px] left-0 right-0 bottom-0 bg-white bg-opacity-75">
       <h1 className="flex items-center justify-center text-white text-3xl font-bold relative top-40 text-center">I Grow By Helping People In Need</h1>
            <div className="flex items-center justify-center h-full my-auto">
            
            <input type="text" placeholder="Type here" className="input mb-36 input-bordered w-full max-w-xs" />
            <button className="btn btn-outline mb-36">Search</button>
            </div>
           
       </div>

        </div>
        </div>
    );
};

export default Banner;