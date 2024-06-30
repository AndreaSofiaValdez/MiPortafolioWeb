export const getImageUrl= (path) =>{
    return new URL(`/assets/${path}`, import.meta.url);
}

export const getVideoUrl=(path) =>{
    return new URL(`/assets/${path}`, import.meta.url);
}




