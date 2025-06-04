import { useEffect, useState, useRef }  from 'react'

const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    const timeOut = useRef(null);

    useEffect(() => {      
        if (timeOut.current) {
            clearTimeout(timeOut.current);
        }
        if (autoPlay) {
            timeOut.current = setTimeout(() => {
                slideRight()
            }, 2400);
        }
        return () => {
            if (timeOut.current) {
                clearTimeout(timeOut.current);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, autoPlay, images.length]);
    
    const slideRight = () => { 
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const slideLeft = () => { 
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }


    return (
    <div className='carousel' onMouseEnter={() => {setAutoPlay(false); if (timeOut.current) clearTimeout(timeOut.current)}} onMouseLeave={() => {setAutoPlay(true)}}>
        <div className='carousel_wrapper'>
            {images.map((image, index) => {
                return (
                    <div key={index} className={index == current ? 'carousel_card carousel_card-active' : 'carousel_card'}>
                        <img className='card_image' src={image.image} alt={image.title} />
                        <div className="card_overlay">
                            <h2 className='card_title'>{image.title}</h2>
                        </div>
                    </div>
                )
            })}

            <div className="carousel_arrow_left" onClick={slideLeft}>&lsaquo;</div>
            <div className="carousel_arrow_right" onClick={slideRight}>&rsaquo;</div>

            <div className="carousel_pagination">
                {images.map((_, index) => {
                    return (
                        <div 
                            key={index} className={index == current 
                                ? 'pagination_dot pagination_dot-active' 
                                : 'pagination_dot'
                            } 
                            onClick={() =>{ setCurrent(index)}}
                        ></div>
                    )
                })}
            </div>

        </div>

    </div>
  )
}

export default Carousel