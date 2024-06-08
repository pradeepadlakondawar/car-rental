import React from 'react'
import {useForm} from 'react-hook-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CarbookForm() {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data)=>{
        console.log(data);
    };
    return (
        <div className="flex justify-center h-auto w-screen  position: relative; border-s-violet-300">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full md:w-3/4 lg:w-3/4 xl:w-1/2">
            <h2 className='mb-8 mt-4 font-bold text-3xl'>Book a Car</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div>
                  <label htmlFor="select_car" className="block mb-2 font-bold">Select Your Car Type <span className='text-red-500'>*</span></label>
                  <select {...register("Select Car", { required: true })} id="select_car" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-600">
                    <option value="">Select car</option>
                    <option value="Toyota_Corolla">Toyota Corolla</option>
                    <option value="Volkswagen_Jetta">Volkswagen Jetta</option>
                    <option value="Chrysler_300">Chrysler 300</option>
                    <option value="Chevrolet_Tahoe">Chevrolet Tahoe</option>
                    <option value="Ford_Edge">Ford Edge</option>
                  </select>
                  {errors["Select Car"] && <p className="text-red-500 mt-2">Please select a car</p>}
                </div>
    
                <div>
                  <label htmlFor="Pick_up" className="block mb-2 font-bold">Pick-up <span className='text-red-500'>*</span></label>
                  <select {...register("Pick_up", { required: true })} id="pick_up" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-600">
                    <option value="">Select Pick up location</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Hyderbad">Hyderbad</option>
                  </select>
                  {errors["Pick_up"] && <p className="text-red-500 mt-2">Please Select Pick up location</p>}
                </div>
    
                <div>
                  <label htmlFor="Drop_of" className="block mb-2 font-bold">Drop-of <span className='text-red-500'>*</span></label>
                  <select {...register("Drop_of", { required: true })} id="drop_of" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-600">
                    <option value="">Select Drop of location</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Hyderbad">Hyderbad</option>
                  </select>
                  {errors["Drop_of"] && <p className="text-red-500 mt-2">Please Select Drop of location</p>}
                </div>
    
                <div>
                  <label htmlFor="select_date_drop_up" className="block mb-2 font-bold">Select Drop up Date <span className='text-red-500'>*</span></label>
                  <DatePicker {...register("drop_up_date", { required: true })} id="select_date_drop_up" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-600" />
                  {errors["drop_up_date"] && <p className="text-red-500 mt-2">Please select a date</p>}
                </div>
    
                <div>
                  <label htmlFor="select_date_drop_of" className="block mb-2 font-bold">Drop of Date <span className='text-red-500'>*</span></label>
                  <DatePicker {...register("drop_of_date", { required: true })} id="select_date_drop_of" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-600" />
                  {errors["drop_of_date"] && <p className="text-red-500 mt-2">Please select a date</p>}
                </div>

                <div className="block mt-8">
              <input type="submit" value="Search" className="bg-[#ff4d30] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" />
              </div>
              </div>
    
              
            </form>
          </div>
        </div>
      );
}

export default CarbookForm
