import React, { useState, useEffect} from "react";
import './Desktop.css';
import { axiosConfigDesktop, axiosConfigNavigationPanal } from '../api/axiosConfig';
import { axiosConfigActionPanal } from '../api/axiosConfig';
function Desktop() {
  const [desktopData, setDesktopData] = useState([]);
  const [ActionPanalData, setActionPanal] = useState([]);
  const [ActionPanalRetrive, setActionPanalRetrive] = useState([]);
  const [NavigationPanalRetrive, setNavigationPanalRetrive] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActionPanelDetailVisible, setIsActionPanelDetailVisible] = useState(false)
  const [isNavigationPanelDetailVisible, setIsNavigationPanelDetailVisible] = useState(false)
  const [NavigationPanalData, setNavigationPanal] = useState([]);

  const toggleSidebarlocal = async () => {
    if (!isSidebarOpen && desktopData.length === 0) {
      try {
        const response = await axiosConfigDesktop();
        setDesktopData(response);
      } catch (error) {
        console.error('Error fetching desktop data:', error);
        return;
      }
    }
    if (!isSidebarOpen && ActionPanalData.length === 0) {
      try {
        const response = await axiosConfigActionPanal();
        setActionPanal(response);
      } catch (error) {
        console.error('Error fetching desktop data:', error);
        return;
      }
    }

    if (!isSidebarOpen && NavigationPanalData.length === 0) {
      try {
        const response = await axiosConfigNavigationPanal();
        setNavigationPanal(response);
      } catch (error) {
        console.error('Error fetching desktop data:', error);
        return;
      }
    }
    setIsSidebarOpen(!isSidebarOpen);
    
  };
  const ActionPanalDataRetrive = async () =>{
    setActionPanalRetrive(ActionPanalData)
    setIsActionPanelDetailVisible(!isActionPanelDetailVisible);
  }

  const NavigationPanalDataRetrive = async () =>{
    setNavigationPanalRetrive(NavigationPanalData)
    setIsNavigationPanelDetailVisible(!isNavigationPanelDetailVisible);
  }
  
  useEffect(() => {
    if(!isSidebarOpen){
    toggleSidebarlocal();
  }} );
  return (
<div className='Navigation'>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {desktopData.map((panelDetail) => (
          <div key={panelDetail.id}>
            {panelDetail.id === 1 ? (
              <div className='ActionPanalDataRetrive'>
                <div className=''>
                  <button className='ActionPanalDataRetriveButton' onClick={ActionPanalDataRetrive}>{panelDetail.desktopList}</button>
                </div>
                {isActionPanelDetailVisible && (
                  <div className='panelDetail'>
                    {ActionPanalRetrive.map((actionPanel) => (
                      <button className='panelDetailbutton'>{actionPanel}</button>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
            {panelDetail.id === 2 ? (
              <div className='ActionPanalDataRetrive'>
                <div className=''>
                  <button className='ActionPanalDataRetriveButton' onClick={NavigationPanalDataRetrive}>{panelDetail.desktopList}</button>
                </div>
                {isNavigationPanelDetailVisible && (
                  <div className='panelDetail'>
                    {NavigationPanalRetrive.map((navigationPanel) => (
                      <button className='panelDetailbutton'>{navigationPanel}</button>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desktop;