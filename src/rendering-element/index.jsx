export default function RenderingElement() {
    const username = "Phu";
    const title = "1234";
    const description = "abc"

    const renderSong = () => {
        return (
            <div><div>Ten bai hat: {title}</div>
                <div>Loi bai hat: {description}</div>
            </div>

        )

    };

    return (
        <div>
            <h1>Hello</h1>
            <div>{username}</div>

            {renderSong()}
        </div>
    )

}