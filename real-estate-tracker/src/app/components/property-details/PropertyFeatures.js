const PropertyDetails = () => {
    const property = {
        address: {
            streetAddress: "101 California Ave UNIT 303",
            city: "Santa Monica",
            state: "CA",
            zipcode: "90403"
        },
        bedrooms: 1,
        bathrooms: 1,
        description: "Seller motivated, easy to show. Perfect Pied-a-terre! Ocean view, turn-key and ready to move in, this bright and spacious 1 bedroom condo provides everything you want to enjoy beach living. The inviting open floor plan leads to a very spacious private balcony with beautiful Ocean views, perfect for entertaining, or for a cozy evening enjoying your private Ocean view and stunning sunsets...",
        yearBuilt: 1964,
        propertyType: "Condo",
        resoFacts: [
            { factLabel: "Type", factValue: "Residential, Condominium" },
            { factLabel: "Year Built", factValue: "1964" },
            { factLabel: "Heating", factValue: "Central" },
            { factLabel: "Cooling", factValue: "Central Air" },
            { factLabel: "Parking", factValue: "1 Garage space" },
            { factLabel: "HOA", factValue: "$1,021 monthly" }
        ],
        appliances: ["Dishwasher", "Refrigerator", "Range/Oven", "Microwave"],
        parkingFeatures: ["Assigned", "On Site", "Guest", "Gated", "Gated Underground", "Community Structure", "Secured"],
        associationAmenities: ["Onsite Property Management", "Storage", "Elevator(s)", "Controlled Access", "Pool", "Guest Parking"],
        schools: [
            { name: "Roosevelt Elementary School", distance: 0.6, rating: 8, level: "Elementary", link: "https://www.greatschools.org/school?id=02931&state=CA" },
            { name: "Lincoln Middle School", distance: 1, rating: 8, level: "Middle", link: "https://www.greatschools.org/school?id=02924&state=CA" },
            { name: "Santa Monica High School", distance: 1.2, rating: 8, level: "High", link: "https://www.greatschools.org/school?id=02932&state=CA" }
        ]
    };

    return (
        <section className="bg-[#1A3C5A] text-[#F9FAFB] py-12">
            <div className="max-w-7xl mx-auto px-8">
                <h1 className="text-5xl font-bold mb-8 text-center">
                    {property.address.streetAddress}, {property.address.city}, {property.address.state} {property.address.zipcode}
                </h1>

                <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Overview</h2>
                    <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                        <div className="flex justify-around mb-4">
                            <div>
                                <p className="text-lg">{property.bedrooms} Bed</p>
                                <p className="text-base text-[#333333]/80">Bedrooms</p>
                            </div>
                            <div>
                                <p className=" text-lg">{property.bathrooms} Bath</p>
                                <p className="text-base text-[#333333]/80">Bathrooms</p>
                            </div>
                            <div>
                                <p className="text-lg">{property.yearBuilt}</p>
                                <p className="text-base text-[#333333]/80">Year Built</p>
                            </div>
                            <div>
                                <p className="text-lg">{property.propertyType}</p>
                                <p className="text-base text-[#333333]/80">Property Type</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Description</h2>
                    <div className="bg-[#D4A017]/90 border-2 border-[#F9FAFB] rounded-lg shadow-md p-6">
                        <p className="text-lg text-[#333333]">{property.description}</p>
                    </div>
                </div>

                

                <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Property Facts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {property.resoFacts.map((fact, index) => (
                            <div key={index} className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                                <p className="text-lg">{fact.factValue}</p>
                                <p className="text-base text-[#333333]/80">{fact.factLabel}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Appliances</h2>
                        <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                            <ul className="list-disc pl-5 text-lg">
                                {property.appliances.map((appliance, index) => (
                                    <li key={index}>{appliance}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Parking Features</h2>
                        <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6 ">
                            <ul className="list-disc pl-5 text-lg">
                                {property.parkingFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Association Amenities</h2>
                        <div className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                            <ul className="list-disc pl-5 text-lg">
                                {property.associationAmenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-[#D4A017]">Nearby Schools</h2>
                        <div className="space-y-6">
                            {property.schools.map((school, index) => (
                                <div key={index} className="bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md p-6">
                                    <a href={school.link} target="_blank" className="text-[#D4A017] hover:underline text-lg ">
                                        {school.name}
                                    </a>
                                    <p className="text-base mt-2">Level: {school.level}</p>
                                    <p className="text-base">Distance: {school.distance} miles</p>
                                    <p className="text-base">Rating: {school.rating}/10</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
    };

    export default PropertyDetails;