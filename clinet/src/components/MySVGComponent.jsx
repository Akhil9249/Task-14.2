import React from 'react';

const MySVGComponent = () => {
  const svgStyles = {
    st0: { display: 'none' },
    st1: { fill: '#FFFFFF' },
    st2: { fill: 'none', stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 },
    st3: { fill: '#FFF8FA' },
    st4: { stroke: '#000000', strokeWidth: 2, strokeMiterlimit: 10 },
    st5: { fill: 'none', stroke: '#000000', strokeMiterlimit: 10 },
    st6: { fill: 'none', stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round', strokeMiterlimit: 10 },
    st7: { fill: '#231F20', stroke: '#000000', strokeWidth: 0, strokeMiterlimit: 10 },
    st8: { fill: '#FF0D5C' },
    st9: { display: 'inline' },
    st10: { fill: 'none', stroke: '#00D8E9', strokeWidth: 0.25, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 },
    st11: { fill: 'none', stroke: '#00D8E9', strokeWidth: 0.25, strokeLinejoin: 'round', strokeMiterlimit: 10 },
    st12: { fill: 'none', stroke: '#00D8E9', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 },
    st13: { fill: 'none', stroke: '#00D8E9', strokeLinejoin: 'round', strokeMiterlimit: 10 },
  };

  return (
    <svg width="30px" fill='#0000FF' height="30px" viewBox="0 0 96 96" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      {/* Define your styles as JavaScript objects */}
      <style>
        {Object.keys(svgStyles).map(key => `.${key} { ${Object.entries(svgStyles[key]).map(([k, v]) => `${k}: ${v};`).join(' ')} }`).join('\n')}
      </style>
      
      {/* Your SVG elements with className attribute instead of class */}
      <g className="koper">
        <g className="Layer_29" />
        <path d="M17,23.1c-1.7,0-3,1.3-3,3v42c0,1.7,1.3,3,3,3h62c1.7,0,3-1.3,3-3v-42c0-1.7-1.3-3-3-3H17z" />
        <path className="st1" d="M47.6,46.9c-1.3,0-2.5-0.4-3.6-1.1L14.4,25.4c-0.3-0.2-0.4-0.6-0.2-0.9l0.4-0.6c0.2-0.3,0.6-0.4,0.9-0.2 l29.6,20.3c1.5,1.1,3.5,1,4.9,0l29.8-20.9c0.3-0.2,0.7-0.1,0.9,0.2l0.4,0.6c0.2,0.3,0.1,0.7-0.2,0.9L51.2,45.7 C50.1,46.5,48.8,46.9,47.6,46.9z" />
      </g>

      {/* Other SVG elements go here */}
    </svg>
  );
};

export default MySVGComponent;