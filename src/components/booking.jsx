import React from 'react';
import { InlineWidget } from 'react-calendly';

function BookingPage() {
    return (
        <div id="meeting" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Schedule a Meeting!!!</h2>
                    <InlineWidget url="https://calendly.com/thebaseballmedic" />
                </div>
            </div>
        </div>
    );
}

export default BookingPage;