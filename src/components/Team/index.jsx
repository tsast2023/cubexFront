import React from 'react'
import { Icon } from '@iconify/react';
import './team.scss'
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function Team({memberImage}) {
  return (
    <Div className="cs-team cs-style1">
        <Div className="cs-member_thumb">
          <img src={memberImage}  />
          <Div className="cs-member_overlay" />
        </Div>
        <Div className="cs-member_info">

    
        </Div>
      
      </Div>
  )
}
