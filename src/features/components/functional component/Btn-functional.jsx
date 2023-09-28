export function Btn() {
    const red = () => {
        alert("clicked")
    }
    return (
        <div>
            <button onClick={red} style={{backgroundcolor:"blue"}}> click me </button>
        </div>
    )
}


