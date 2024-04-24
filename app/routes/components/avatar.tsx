export default function Avatar() {
    return (
        <div className="avatar" onClick={handleAvatarClick}>
            <div className="w-24 rounded">
                <img src="~/../public/tyler.jpg" />
            </div>
        </div>
    )
}

export function handleAvatarClick(){

}