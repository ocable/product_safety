import { useState } from "react";
import { useAddIncidentMutation } from "../reports/incidentSlice";

export default function IncidentForm() {
  const [brand, setBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [incidentDescription, setIncidentDescription] = useState("");
  const [upc, setUpc] = useState("");
  const [addIncident] = useAddIncidentMutation();

  const create = async (evt) => {
    evt.preventDefault();
    addIncident({ brand, productDescription, incidentDescription, upc });
  };

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900 h-screen">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Submit an Incident Report
              </h1>
              <form class="form" onSubmit={create}>
                <label>Brand:</label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
                <label>Product Description:</label>
                <input
                  type="text"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  required
                />
                <label>Incident Description:</label>
                <textarea
                  type="text"
                  value={incidentDescription}
                  onChange={(e) => setIncidentDescription(e.target.value)}
                  required>
                </textarea>
                <label>UPC:</label>
                <input
                  type="text"
                  value={upc}
                  onChange={(e) => setUpc(e.target.value)}
                />
                <button class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 my-3">
                  Submit Incident
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
