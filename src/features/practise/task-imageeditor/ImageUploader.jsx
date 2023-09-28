import { useState } from "react";
function ImageUpload() {
    const [imageUrl, setImageUrl] = useState(null);
      
    const handleImageUpload = (e) => {
        // const selectedFile = e.target.file[0];
        // if (selectedFile) {
        //     const render = new FileReader();
        //     render.onload = (event) => {
        //         const imageUrl = event.target.result;
        //     };
        //     render.readAsDataURL(selectedFile);
        // }
        setImageUrl(URL.createObjectURL(e.target.files[0]))
    };

    return (
        <div>
            <input type="file" accept="image/png, image/jpg" onChange={handleImageUpload} />
            <div>
                <img src={imageUrl} alt="selected" style={{ maxWidth: '100%' }} />
            </div>
            {/* <div className="sidebar"></div>
            <div className="footer"></div> */}
            
        </div>
    )
}export default ImageUpload 