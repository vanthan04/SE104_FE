import React from 'react'
import { BottomNavigationAction, BottomNavigation } from '@mui/material';
const BottomNav = ({ value, setValue, labels }) => {
     return (
          <BottomNavigation
               showLabels
               value={value}
               onChange={(event, newValue) => {
                    setValue(newValue);
               }}
          >
               {labels.map((label, index) => (
                    <BottomNavigationAction key={`${label} + ${index}`} label={label.title} icon={label.Icon} />
               ))}
          </BottomNavigation>
     )
}

export default BottomNav