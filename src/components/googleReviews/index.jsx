import React from 'react';
import { ElfsightWidget } from "react-elfsight-widget";
import "./index.scss"

const GoogleReviews = () => {
    const featurableWidgetId = "e7440500-a48c-4650-983b-3e851199da10";
  return (
    <section className="reviews">
          <div className="reviews-inner">
            <h2 className='review-title'>WHAT OUR CLIENTS SAY</h2>
             <ElfsightWidget widgetId='79e5737a-4283-427d-ad77-bdf873028a71' lazy />
          </div>
        </section>
  )
}

export default GoogleReviews
