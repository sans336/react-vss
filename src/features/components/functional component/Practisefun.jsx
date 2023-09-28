
export function Practisefun() {
    const red = () => {
        alert ("red function called via clicking")
    }
    return (
        <div>
            <button onClick={red}> component</button>
        </div>
    )
}