import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlacementData } from '../../../operations/getData';

export default function PlacementVisule() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getPlacementData(dispatch);
  }, []);
  
  const PlacementData = useSelector(store => store.fetchedData);

  return (
    <div>
      {PlacementData.length>0 && <p>Hello i am Placement Data</p>}
    </div>
  )
}
