const areaOrPerimeter = function(l , w) {
    // Return your answer
    if(l === w){
      const area = l * w;
      return area;
      } else {
        const perimeter = 2 * (l+w);
        return perimeter;
      }
    
  };
   const length = 6;
   const width = 10;
   const result = areaOrPerimeter(length, width);
   console.log(result);
  
  const len = 3;
  const wid = 3;
  const res = areaOrPerimeter(len,wid);
  console.log(res);