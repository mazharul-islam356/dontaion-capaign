



const Banner = () => {
    return (
        <>
        
        <div className="h-[450px] bg-no-repeat bg-img-contain bg-[url('https://i.ibb.co/C1gwqW8/istockphoto-1283154274-612x612.jpg')] bg-cover">
       
        <h1 className="flex items-center justify-center text-white text-3xl font-bold relative top-40 text-center">I Grow By Helping People In Need</h1>
            <div className="flex items-center justify-center h-full my-auto">
            
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-outline">Search</button>
            </div>
           

        </div>
        </>
    );
};

export default Banner;