
import { useEffect, useRef, useState, MutableRefObject } from 'react';



export const useIntersectionObserver = (): [MutableRefObject<null>, boolean] => {

  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);



  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => setIsVisible(entry.isIntersecting),

      { threshold: 0.1 }

    );



    if (ref.current) {

      observer.observe(ref.current);

    }



    return () => {

      if (ref.current) {

        observer.unobserve(ref.current);

      }

    };

  }, [ref]);



  return [ref, isVisible];

};
