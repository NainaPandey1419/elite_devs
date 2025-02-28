import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInternShipData, getNPTELData } from '../../../operations/getData';

export default function NPTELVisual() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getNPTELData(dispatch);
  }, []);
  
  const NPTELData = useSelector(store => store.fetchedData);

  return (
    <div>
      {NPTELData.length>0 && <p>Hello i am NPTEL Data</p>}
    </div>
  )
}
