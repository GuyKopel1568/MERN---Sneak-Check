/*eslint-disable*/
import React from 'react';
function CreateSneaker() {
  return (
    <div className="ml-8" data-aos="zoom-in-up">
      <div className="upload_container text-white ">
        <main className="p-3 max-w-4xl mx-auto">
          <h1 className=" uppercase text-2xl p-2">
            Upload Sneaker for trade or sell!
          </h1>
          <form className="flex flex-col sm:flex-row ">
            <div className="flex flex-col gap-1 flex-1">
              <p>Sneaker Name:</p>
              <input
                type="text"
                placeholder="Sneaker Name"
                className="bg-[#404040] text-white rounded-3xl border p-3"
                id="name"
                maxLength="62"
                minLength="10"
                required
              />
              <p>Sneaker Description:</p>
              <input
                type="text"
                placeholder="Sneaker Description"
                className="bg-[#404040] text-white rounded-3xl border p-3"
                id="description"
                required
              />
              <p>Sneaker Brand:</p>
              <input
                type="text"
                placeholder="Sneaker Brand"
                className="bg-[#404040] text-white rounded-3xl border p-3"
                id="brand"
                required
              />
              <p>Address:</p>
              <input
                type="text"
                placeholder="Sneaker's Owner Address"
                className="bg-[#404040] text-white rounded-3xl border p-3"
                id="address"
                required
              />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default CreateSneaker;
