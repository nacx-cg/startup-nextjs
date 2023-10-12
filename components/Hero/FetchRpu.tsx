import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';


function sanitizeData(data) {
    return JSON.parse(JSON.stringify(data, (key, value) => {
      if (typeof value === "number" && isNaN(value)) {
        return null; // or return string "NaN" or undefined; choose your preferred behavior here
      }
      return value;
    }));
  }

  
const FetchRpu = () => {
    

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [rpu, setRpu] = useState('');  // Add this state

    const handleRpuChange = (event) => {
        setRpu(event.target.value);
    };

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await fetch('http://localhost:5001/cfe_bill_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rpu: rpu }),  // Use the rpu state value here
            });

            if (response.ok) {
                const jsonData = await response.json();
                const sanitizedData = sanitizeData(jsonData); 
                setData(sanitizedData);
                Router.push({
                    pathname: '/InitialRPUReport',
                    query: { data: JSON.stringify(sanitizedData) }
                }); 
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Unknown Error');
            }
        } catch (err) {
            setError(err.message || 'Unknown Error');
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <div className="flex flex-col items-left justify-left space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <input 
                type="text" 
                value={rpu} 
                onChange={handleRpuChange} 
                placeholder="Introduce tu rpu" 
                className="py-4 px-8 rounded-md" 
            />
            <button 
                onClick={fetchData} 
                disabled={loading} 
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
                Empieza tu evaluación
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div>
                    <h3>Data</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default FetchRpu;
