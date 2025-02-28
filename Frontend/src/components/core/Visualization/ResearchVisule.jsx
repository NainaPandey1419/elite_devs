import React from 'react'
import { getResearchData } from '../../../operations/getData';
import { useDispatch, useSelector } from 'react-redux';

export default function ResearchVisule() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getResearchData(dispatch);
  }, []);
  
  const reasearchData = useSelector(store => store.fetchedData);

  return (
    <div>
      {reasearchData.length>0 && <p>Hello i am reasearch Data</p>}
    </div>
  )
}

