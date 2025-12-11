import { createContext, ReactNode, useContext, useState } from "react";

type ImageContextType = {
    imageUrl: string | null;
    setImageUrl: (url: string) => void;
}


const ImageContext = createContext<ImageContextType | undefined>(undefined);


export const ContextImageProvider = ({children}: {children: ReactNode}) => {
     const [imageUrl, setImageUrl] = useState<string | null>(null)
    return(
        <ImageContext.Provider value={{imageUrl, setImageUrl}} >
            {children}
        </ImageContext.Provider>
    );
};


export const useImageContext = () => {
    const context = useContext(ImageContext);
      if (!context) throw new Error("useImageContext must be used within ContextImageProvider");
  return context;
}