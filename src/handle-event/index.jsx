
export default function HandleEvent() {
    const handleDemoClick = () => {
        console.log("handleDemoClick");

    }
    const handleClickParams = (fullname) => {
        console.log(`Hello ${fullname}`);

    }


    return (
        <div>
            <h1>HandleEvent</h1>

            <button onClick={handleDemoClick}>Demo click</button>
            <button onClick={() => handleClickParams("Phu")}>Demo click params</button>


        </div>
    )
}
