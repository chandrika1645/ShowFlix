const cloudName = "djgxphref";  
const uploadPreset = "your_upload_preset"; 

export const fetchFromCloudinary = async (resourceType = "image") => {
    try {
        const response = await fetch(
            `https://res.cloudinary.com/${cloudName}/image/list/all.json`
        );
        const data = await response.json();
        return data.resources.map((file) => file.secure_url); 
    } catch (error) {
        console.error("Error fetching Cloudinary files:", error);
        return [];
    }
};

export const uploadToCloudinary = async (file, resourceType = "auto") => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();
    return data.secure_url; 
};
