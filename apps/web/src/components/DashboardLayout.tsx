import React from 'react';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background selection:bg-primary selection:text-white">
      <Sidebar />
      <main className="flex-1 w-full max-w-[100vw] lg:max-w-[calc(100vw-280px)] min-h-screen">
        <div className="p-4 lg:p-8 pt-20 lg:pt-8 w-full max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
