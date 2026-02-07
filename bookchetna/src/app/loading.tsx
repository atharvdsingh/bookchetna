import React from 'react';
import CenterComponent from '@/components/CenterComponent';

export default function Loading() {
    return (
        <CenterComponent className="min-h-[50vh] flex items-center justify-center">
             <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
        </CenterComponent>
    )
}