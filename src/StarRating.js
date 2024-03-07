import {useState} from "react";

const containerStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
};

const starContainerStyle = {
    display: 'flex',
    gap: '2px',
    alignItems: 'center',
    justifyContent: 'center'
};

const textStyle = {
    lineHeight: '1',
    margin: '0',
};

export default function StarRating({
                                       maxRating = 5,
                                       color = "#fcc419",
                                       size = 48,
                                       className = "",
                                       messages = [],
                                       defaultRating = 0,
                                       onSetRating,
                                   }) {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    function handleRating(rating) {
        setRating(rating);
        onSetRating(rating);
    }

    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({length: maxRating}, (_, i) => (
                    <Star key={i}
                          onRate={() => handleRating(i + 1)}
                          full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                          onHoverIn={() => setTempRating(i + 1)}
                          onHoverOut={() => setTempRating(0)}
                          size={size}
                          color={color}
                    />
                ))}
            </div>
            <p style={textStyle}>{tempRating || rating || ""}</p>
        </div>
    )
}


function Star({onRate, full, onHoverIn, onHoverOut, size, color}) {
    const starStyle = {
        width: `${size}px`,
        height: `${size}px`,
        display: "block",
        cursor: 'pointer'
    }

    return (
        <span role="button" style={starStyle}
              onClick={onRate}
              onMouseEnter={onHoverIn}
              onMouseLeave={onHoverOut}
        >

            {full ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="w-6 h-6">
                <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"/>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke={color} className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
            }

      </span>
    );
}