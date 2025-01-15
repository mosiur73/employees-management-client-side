import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from '../../../../hooks/useAxiosPublic';




const WorkSheet = () => {
    const [date, setDate] = useState(new Date());
    const axiosPublic=useAxiosPublic()
    const handleSubmit=async e =>{
        e.preventDefault()
        const form = e.target
        const tasks=form.tasks.value;
        const hours=form.hours.value;
        const formattedDate = date.toISOString().split('T')[0];
        const data={ tasks, hours, date: formattedDate };
        console.log(data)
        try{
          const response=await  axiosPublic.post(`/employee`,data)
            console.log('Data submitted successfully:', response.data);
        }catch (error) {
            console.error('Error submitting data:', error);
            
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
            <form
              onSubmit={handleSubmit}
                className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md space-x-28"
            >
                {/* Tasks Dropdown */}

                <select
                    name='tasks'
                    className="px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                >
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                </select>

                {/* Hours Worked */}
                <input
                    type="number"
                    name='hours'
                    placeholder="Hours Worked"
                    className="w-24 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />

                   <div>
                   <DatePicker name='date' selected={date} onChange={(date) => setDate(date)} />
                   </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Add / Submit
                </button>
            </form>
        </div>
    );
};

export default WorkSheet;