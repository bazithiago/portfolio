import Image from 'next/image';


const TechIcon = ({ alt, src, size }) => {
    return(
        <Image 
            alt={alt}
            src={src}
            width={size}
            height={size}
    />        
    )
}

export default TechIcon;