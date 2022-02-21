/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

export default function useFetch(url, type) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetch(url);
      const resultJson = await result.json();
      console.log('resultJson', resultJson);
      setData(resultJson[`${type}`]);
    })();
  }, [url]);

  return { data };
}
