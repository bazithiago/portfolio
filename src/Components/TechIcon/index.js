import styled from 'styled-components';
import Image from 'next/image';


const TechIconStyles = styled.div`
    margin-right: 15px;


    /* ::before {
        content: attr(data-tooltip)
    } */
`

const TechIcon = ({ alt, src, size }) => {
    return(
        <TechIconStyles>
            <Image 
                alt={alt}
                src={src}
                width={size}
                height={size}
                data-tooltip={alt}
            />        
        </TechIconStyles>
    )
}

export default TechIcon;